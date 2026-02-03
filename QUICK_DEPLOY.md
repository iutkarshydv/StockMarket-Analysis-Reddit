# Quick Deploy Guide

## ✅ You're Ready to Deploy!

The data file has already been generated and is in your repository. Follow these steps:

### Deploy to Vercel Now:

```bash
# Stage all changes
git add .

# Commit
git commit -m "Update Vercel configuration for deployment"

# Push to GitHub
git push origin main
```

### Then on Vercel:

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js - just click **"Deploy"**
5. Wait 1-2 minutes for the build to complete
6. Your dashboard will be live! 🎉

### If Data Updates Are Needed:

```bash
# When you have new Reddit data, run:
npm run export-data

# Then commit and push:
git add public/data/dashboard-data.json
git commit -m "Update dashboard data"
git push
```

Vercel will automatically redeploy with the new data.

### Build Settings (Vercel will auto-detect these):

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`

### Your Dashboard Will Include:

✅ Real-time sentiment analysis visualization  
✅ Interactive charts and graphs  
✅ Top mentioned tickers  
✅ ML model performance comparison  
✅ Top positive and negative posts  
✅ Fully responsive design  

### Troubleshooting:

- **Build fails**: Make sure `public/data/dashboard-data.json` is committed
- **Data not showing**: Verify the JSON file exists in your repository
- **Deployment issues**: Check Vercel deployment logs

That's it! Your WSB Sentiment Analysis Dashboard is ready to go live. 🚀
