# Data Discovery & Classification Solution Finder

AI-powered tool to help find the best data discovery and classification solutions based on your requirements.

## 🚀 Quick Deploy to Vercel (Free)

### Step 1: Prerequisites
- GitHub account (free)
- Vercel account (free) - sign up at https://vercel.com

### Step 2: Upload to GitHub

1. Go to https://github.com/new
2. Create a new repository named `data-discovery-tool`
3. Upload all these files:
   - `public/index.html`
   - `api/generate.js`
   - `vercel.json`
   - `package.json`
   - `README.md`

### Step 3: Deploy to Vercel

**Option A: Via Vercel Website (Easiest)**
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `data-discovery-tool` repository
4. Click "Deploy"
5. Wait 1-2 minutes - Done! 🎉

**Option B: Via Vercel CLI**
```bash
npm install -g vercel
cd your-project-folder
vercel
```

### Step 4: Use Your App

1. Visit your Vercel URL (e.g., `https://your-app.vercel.app`)
2. Enter your Anthropic API key
3. Answer the questions
4. Get AI-powered recommendations!

## 📁 Project Structure

```
/
├── public/
│   └── index.html          # Frontend (React app)
├── api/
│   └── generate.js         # Backend API (handles Anthropic calls)
├── vercel.json             # Vercel configuration
├── package.json            # Project metadata
└── README.md               # This file
```

## 🔧 How It Works

1. **Frontend**: User fills out questionnaire in browser
2. **Backend API**: Serverless function calls Anthropic API (avoids CORS)
3. **AI Agent**: Claude analyzes requirements and recommends solutions
4. **Results**: User sees matched solutions with details

## 🆓 Cost

- **Vercel Hosting**: FREE (hobby plan)
- **Anthropic API**: $5 free credit (~150-500 assessments)

## 🛠️ Local Development

```bash
# Install Vercel CLI
npm install -g vercel

# Run locally
vercel dev

# Open http://localhost:3000
```

## ⚙️ Customization

### Add More Questions

Edit `public/index.html` and find the `QUESTIONS` array:

```javascript
const QUESTIONS = [
    {
        id: 'yourQuestion',
        question: 'Your question text?',
        options: ['Option 1', 'Option 2'],
        multiple: false  // true for checkboxes, false for radio
    }
];
```

### Change AI Behavior

Edit the `prompt` variable in `public/index.html` to modify how Claude analyzes requirements.

## 🐛 Troubleshooting

**Problem**: "API request failed"
- Check your Anthropic API key is valid
- Ensure you have API credits remaining

**Problem**: "404 on /api/generate"
- Make sure `api/generate.js` is deployed
- Check Vercel deployment logs

**Problem**: Frontend doesn't load
- Verify `public/index.html` exists
- Check browser console for errors

## 📝 License

MIT - Feel free to use and modify!
