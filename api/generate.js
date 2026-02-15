export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { apiKey, prompt } = req.body;

    if (!apiKey || !prompt) {
      return res.status(400).json({ error: 'Missing apiKey or prompt' });
    }

    // Call Anthropic API from server-side (no CORS issues)
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ 
        error: errorData.error?.message || 'API request failed' 
      });
    }

    const data = await response.json();
    const content = data.content[0].text;

    return res.status(200).json({ content });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
```

**Step 4:** Scroll down, add commit message: "Add API backend function"

**Step 5:** Click **"Commit changes"** button

**Done!** ✅ You should now see the `api` folder with `generate.js` inside it.

---

### **Method 2: Download and Upload (Alternative)**

If you prefer to upload a file:

**Step 1:** Create a text file on your computer named `generate.js`

**Step 2:** Copy the code above and paste it into `generate.js`, then save

**Step 3:** In GitHub, you need to create the folder first:
- Click **"Add file"** → **"Create new file"**
- Type: `api/.gitkeep` (this creates an empty api folder)
- Click **"Commit changes"**

**Step 4:** Click on the `api` folder in GitHub

**Step 5:** Click **"Add file"** → **"Upload files"**

**Step 6:** Drag your `generate.js` file from your computer

**Step 7:** Click **"Commit changes"**

---

## 🎯 **Visual Guide - What You Should Type**

When creating the file, the GitHub interface should look like this:
```
┌─────────────────────────────────────────┐
│ Name your file...                       │
│ api/generate.js          ← Type this    │
└─────────────────────────────────────────┘
```

The key is typing `api/generate.js` - the slash `/` tells GitHub to create a folder called `api` and put `generate.js` inside it.

---

## ✅ **Verify It Worked**

After committing, your GitHub file structure should show:
```
.github/
api/              ← New folder!
  └── generate.js ← New file!
README.md
index.html
package.json
vercel.json
