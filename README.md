# WSB Sentiment Analysis Dashboard 🚀📊

An interactive web dashboard for analyzing sentiment and trends from Reddit's WallStreetBets posts. Built with Next.js, TypeScript, and Recharts, deployed on Vercel.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## 🔍 Features

- **Real-time Sentiment Analysis**: VADER-based sentiment scoring of WSB posts
- **Interactive Visualizations**: Charts showing sentiment distribution, timeline trends, and engagement metrics
- **Ticker Tracking**: Most mentioned stock tickers extracted from posts
- **ML Model Comparison**: Performance metrics for XGBoost, LSTM, FinBERT, and other models
- **Top Posts**: Showcase of most popular positive and negative sentiment posts
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Data Processing**: Python (pandas, NLTK, VADER)
- **Deployment**: Vercel

## 🔍 Objectives
- Clean and preprocess WSB text data
- Explore trends and sentiment distribution
- Train models: Logistic Regression, SVM, Random Forest, XGBoost, LSTM, FinBERT
- Evaluate using accuracy, precision, recall, F1-score

## 🧠 Models Used
- ✅ Logistic Regression
- 🌲 Random Forest
- 📈 XGBoost
- 💬 LSTM
- 🤖 FinBERT (financial sentiment transformer)

## 📊 Results
| Model     | Accuracy |
|-----------|----------|
| XGBoost   | 0.683    |
| LSTM      | 0.5773   |
| FinBERT   | 0.7716   |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+ with pip

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd StockMarket-Analysis-Reddit
```

2. **Install Node.js dependencies**
```bash
npm install
```

3. **Install Python dependencies**
```bash
pip install pandas numpy nltk
```

4. **Process the data**
```bash
npm run export-data
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory, ready for deployment.

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy!

### Important: Data Processing

Before deploying, make sure to run the data export:
```bash
npm run export-data
```

This creates `public/data/dashboard-data.json` which is needed for the dashboard.

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main dashboard page
├── components/
│   ├── StatsCards.tsx    # Statistics overview cards
│   ├── SentimentChart.tsx # Sentiment distribution pie chart
│   ├── TimelineChart.tsx  # Posts and sentiment timeline
│   ├── TickersChart.tsx   # Most mentioned tickers
│   ├── ModelResults.tsx   # ML model comparison
│   └── TopPosts.tsx       # Top positive/negative posts
├── public/
│   └── data/
│       └── dashboard-data.json  # Processed data (generated)
├── export_data.py        # Python script to process CSV data
├── wsb_posts.csv         # Raw Reddit data
├── WSB_MODEL_FINAL.ipynb # Jupyter notebook with analysis
└── package.json          # Node.js dependencies
```

## 🎨 Customization

### Update Data
To update with new Reddit data, replace `wsb_posts.csv` and run:
```bash
npm run export-data
```

### Modify Charts
Edit components in the `components/` directory to customize visualizations.

### Change Theme
Modify colors in `tailwind.config.js` and `app/globals.css`.

## 📊 Data Pipeline

1. **Raw Data**: Reddit posts in `wsb_posts.csv` (title, score, comments, etc.)
2. **Processing**: `export_data.py` applies VADER sentiment analysis
3. **Export**: Aggregated data saved as JSON in `public/data/`
4. **Visualization**: React components fetch and display the data

## 🧠 Sentiment Analysis

The dashboard uses NLTK's VADER (Valence Aware Dictionary and sEntiment Reasoner) for sentiment analysis:

- **Positive**: compound score > 0.05
- **Neutral**: compound score between -0.05 and 0.05
- **Negative**: compound score < -0.05

## ⚙️ Setup
```bash
pip install -r requirements.txt
