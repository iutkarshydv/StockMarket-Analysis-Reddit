import pandas as pd
import numpy as np
import json
from collections import Counter
import re
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk

# Download required NLTK data
try:
    nltk.download('vader_lexicon', quiet=True)
except:
    pass

# Load data
df = pd.read_csv("data/wsb_posts.csv")

# Initialize VADER
sia = SentimentIntensityAnalyzer()

# Create sentiment scores
def get_sentiment(text):
    if isinstance(text, str) and text.strip():
        return sia.polarity_scores(text)['compound']
    return 0

# Apply sentiment analysis
df['sentiment_score'] = df['title'].apply(get_sentiment)
df['sentiment'] = df['sentiment_score'].apply(
    lambda score: 'positive' if score > 0.05 else ('negative' if score < -0.05 else 'neutral')
)

# Convert created to datetime
try:
    if 'float' in str(df['created'].dtype) or 'int' in str(df['created'].dtype):
        df['created'] = pd.to_datetime(df['created'], unit='s')
    else:
        df['created'] = pd.to_datetime(df['created'])
except:
    pass

# Create date column
df['date'] = df['created'].dt.date.astype(str)

# 1. Sentiment Distribution
sentiment_dist = df['sentiment'].value_counts().to_dict()

# 2. Posts over time
posts_by_date = df.groupby('date').size().reset_index(name='count')
posts_timeline = posts_by_date.to_dict('records')

# 3. Sentiment over time
sentiment_timeline = df.groupby(['date', 'sentiment']).size().reset_index(name='count')
sentiment_timeline = sentiment_timeline.to_dict('records')

# 4. Score distribution
df['score_bucket'] = pd.cut(df['score'], bins=[0, 100, 500, 1000, 5000, float('inf')], 
                             labels=['0-100', '100-500', '500-1K', '1K-5K', '5K+'])
score_dist = df['score_bucket'].value_counts().sort_index().to_dict()

# 5. Top posts by sentiment
top_positive = df[df['sentiment'] == 'positive'].nlargest(10, 'score')[['title', 'score', 'sentiment_score', 'created']].to_dict('records')
top_negative = df[df['sentiment'] == 'negative'].nlargest(10, 'score')[['title', 'score', 'sentiment_score', 'created']].to_dict('records')

# 6. Extract and count tickers
def extract_tickers(text):
    if not isinstance(text, str):
        return []
    pattern = r'\$([A-Z]{1,5})\b'
    matches = re.findall(pattern, text)
    return matches

all_tickers = []
for _, row in df.iterrows():
    tickers_in_title = extract_tickers(row['title'])
    tickers_in_body = extract_tickers(str(row['body']))
    all_tickers.extend(tickers_in_title + tickers_in_body)

ticker_counts = Counter(all_tickers)
top_tickers = [{'ticker': ticker, 'count': count} for ticker, count in ticker_counts.most_common(20)]

# 7. Statistics
stats = {
    'total_posts': int(len(df)),
    'avg_score': float(df['score'].mean()),
    'avg_comments': float(df['comms_num'].mean()),
    'avg_sentiment': float(df['sentiment_score'].mean()),
    'positive_percentage': float((df['sentiment'] == 'positive').sum() / len(df) * 100),
    'negative_percentage': float((df['sentiment'] == 'negative').sum() / len(df) * 100),
    'neutral_percentage': float((df['sentiment'] == 'neutral').sum() / len(df) * 100),
}

# 8. Sentiment vs Engagement
sentiment_engagement = df.groupby('sentiment').agg({
    'score': 'mean',
    'comms_num': 'mean'
}).reset_index()
sentiment_engagement = sentiment_engagement.to_dict('records')

# 9. Model Results (from your README)
model_results = [
    {'model': 'XGBoost', 'accuracy': 0.483},
    {'model': 'LSTM', 'accuracy': 0.4773},
    {'model': 'FinBERT', 'accuracy': 0.4716},
    {'model': 'Random Forest', 'accuracy': 0.45},
    {'model': 'Logistic Regression', 'accuracy': 0.43},
    {'model': 'SVM', 'accuracy': 0.41}
]

# Compile all data
dashboard_data = {
    'stats': stats,
    'sentiment_distribution': sentiment_dist,
    'posts_timeline': posts_timeline[-30:],  # Last 30 days
    'sentiment_timeline': sentiment_timeline[-90:],  # Last 90 days
    'score_distribution': score_dist,
    'top_positive_posts': top_positive,
    'top_negative_posts': top_negative,
    'top_tickers': top_tickers,
    'sentiment_engagement': sentiment_engagement,
    'model_results': model_results
}

# Export to JSON
with open('public/data/dashboard-data.json', 'w') as f:
    json.dump(dashboard_data, f, indent=2, default=str)

print("✅ Data exported successfully to public/data/dashboard-data.json")
print(f"📊 Processed {len(df)} posts")
print(f"🎯 Sentiment Distribution: {sentiment_dist}")
