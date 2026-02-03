# Development Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/iutkarshydv/StockMarket-Analysis-Reddit.git
cd StockMarket-Analysis-Reddit
```

### 2. Set up Python Environment

Create and activate a virtual environment:

```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS/Linux
python -m venv .venv
source .venv/bin/activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

### 3. Install Node.js Dependencies

```bash
npm install
```

### 4. Generate Dashboard Data

Run the Python script to process the data and generate the dashboard JSON:

```bash
# Windows (with venv activated)
.venv\Scripts\python.exe export_data.py

# macOS/Linux (with venv activated)
python export_data.py
```

This will create `public/data/dashboard-data.json` with all the processed data.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
StockMarket-Analysis-Reddit/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── StatsCards.tsx       # Statistics cards
│   ├── SentimentChart.tsx   # Sentiment pie chart
│   ├── TimelineChart.tsx    # Timeline charts
│   ├── TickersChart.tsx     # Ticker mentions chart
│   ├── ModelResults.tsx     # ML model results
│   └── TopPosts.tsx         # Top posts display
├── types/                   # TypeScript type definitions
│   └── dashboard.ts         # Dashboard data types
├── data/                    # Raw data
│   └── wsb_posts.csv        # Reddit posts data
├── public/                  # Static assets
│   └── data/
│       └── dashboard-data.json  # Generated dashboard data
├── notebook/                # Jupyter notebooks
├── export_data.py           # Python data processing script
├── requirements.txt         # Python dependencies
├── package.json             # Node.js dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── vercel.json              # Vercel deployment config
```

## Development Workflow

1. **Data Processing**: If you modify the data processing logic, run `export_data.py` to regenerate the JSON
2. **Frontend Development**: Run `npm run dev` and make changes to components
3. **Type Safety**: All components use proper TypeScript types from `types/dashboard.ts`
4. **Styling**: Uses Tailwind CSS for styling - modify classes directly in components

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export-data` - Run Python data processing (deprecated on Vercel)

## Environment

- **Node.js**: v18+ recommended
- **Python**: v3.8+
- **Next.js**: v16.1.6
- **React**: v18.3.1
- **TypeScript**: v5.3.3

## Deployment

The project is configured for Vercel deployment with static export.

1. Push changes to GitHub
2. Vercel will automatically deploy
3. The pre-generated `dashboard-data.json` is used (no Python runtime needed)

## Troubleshooting

### Python Import Errors

Make sure your virtual environment is activated and dependencies are installed:

```bash
pip install -r requirements.txt
```

### TypeScript Errors

Ensure all dependencies are installed:

```bash
npm install
```

### Data Not Loading

Make sure `public/data/dashboard-data.json` exists. Run:

```bash
python export_data.py
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request
