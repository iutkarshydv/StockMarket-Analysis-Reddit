# Deployment Guide for WSB Sentiment Analysis Dashboard

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Data

**IMPORTANT**: You must generate the data file locally before deploying!

```bash
# Install Python dependencies if not already installed
pip install pandas numpy nltk

# Process the CSV data and generate JSON
npm run export-data
```

This will create `public/data/dashboard-data.json` with all the processed sentiment data.

**The JSON file must be committed to your repository** because Vercel's build environment doesn't have Python dependencies.

### Step 2: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to verify everything works.

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Option B: Using GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   # Make sure the JSON data file is included
   git add public/data/dashboard-data.json
   git add .
   git commit -m "Add WSB sentiment dashboard with data"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build` (or use the custom one in vercel.json)
   - Output Directory: `out`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your dashboard will be live!

### Step 4: Update Data

When you have new Reddit data:

```bash
# Update wsb_posts.csv with new data
# Then run:
npm run export-data

# Commit changes
git add public/data/dashboard-data.json
git commit -m "Update dashboard data"
git push

# Vercel will automatically redeploy
```

## 🔧 Configuration Options

### Environment Variables (if needed)

If you want to add any API keys or sensitive data:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. Add to Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables

### Custom Domain

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📊 Build Command Breakdown

The `vercel.json` file includes:
```json
{
  "buildCommand": "npm run export-data && npm run build"
}
```

This ensures:
1. Python script processes CSV data
2. Next.js builds the static site
3. Everything is ready for deployment

## 🐛 Troubleshooting

### Build Fails on Vercel

**Issue**: Python script fails
- **Solution**: Make sure `pandas`, `numpy`, and `nltk` are available
- **Alternative**: Run `npm run export-data` locally and commit the JSON file

### Data Not Showing

**Issue**: Dashboard shows "Error loading data"
- **Solution**: Verify `public/data/dashboard-data.json` exists
- Run `npm run export-data` before deploying

### NLTK Resources Missing

**Issue**: VADER lexicon not found
- **Solution**: The script automatically downloads NLTK data
- If it fails, download manually:
  ```python
  import nltk
  nltk.download('vader_lexicon')
  ```

## 📱 Performance Tips

1. **Optimize Data Size**: Limit the number of posts in the JSON if it's too large
2. **Use CDN**: Vercel automatically serves from CDN
3. **Enable Caching**: Already configured in Next.js
4. **Compress Images**: Use WebP format for any images

## 🔄 Continuous Deployment

Once connected to GitHub:
1. Any push to `main` branch triggers a deployment
2. Pull requests get preview deployments
3. Production deploys on merge to main

## 📈 Monitoring

View deployment status and analytics:
- Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- Analytics: Available in Vercel project settings
- Logs: Real-time logs in deployment details

## 🎉 Success!

Your dashboard should now be live at:
- `https://your-project-name.vercel.app`
- Or your custom domain

Share the link and enjoy your WSB sentiment analysis dashboard!
