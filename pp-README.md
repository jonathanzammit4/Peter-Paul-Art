# Fr. Peter Paul Sultana — Art Portfolio Website

A personal website for a priest and artist. Built with plain HTML, CSS, and JavaScript — no frameworks needed.

---

## 📁 File Structure

```
your-project-folder/
├── pp-index.html       ← Main page (edit content here)
├── pp-style.css        ← All visual styling
├── pp-script.js        ← Navigation + animations
├── pp-README.md        ← This file
└── images/          ← (Create this folder) Add your photos here
```

---

## ✏️ How to Edit Content

Open `index.html` in any text editor (Notepad, VS Code, etc.) and look for:

- `[Name]` → Replace with the priest's actual name
- `[X] years` → Replace with years of service
- `[Seminary]`, `[Institution]` → Replace with real names
- `[City/Country]` → Real location
- `your.email@example.com` → Real email address
- Social media `href="#"` → Replace `#` with actual profile URLs

### To add a real photo:
1. Put the photo file (e.g. `portrait.jpg`) inside an `images/` folder
2. In `index.html`, find the `<div class="about-image-placeholder">` section
3. Replace the entire `<div class="about-image-placeholder">` block with:
   ```html
   <img src="images/portrait.jpg" alt="Father [Name]" />
   ```

### To add real gallery artwork:
Find each `<div class="gallery-thumb" style="--hue: ...">` and replace with:
```html
<img src="images/artwork-name.jpg" alt="Artwork description" />
```

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `username.github.io` (replace `username` with your GitHub username)
   - Example: if your username is `frjohnart`, name it `frjohnart.github.io`
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop all your files: `index.html`, `style.css`, `script.js`, and your `images/` folder
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository's **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Branch", select **main** and click **Save**
4. Wait 1–2 minutes, then visit: `https://username.github.io`

✅ Your website is now live!

---

## 🔗 Updating Social Media Links

In `index.html`, find the footer section and replace each `href="#"` with the real URL:

```html
<!-- Facebook example -->
<a href="https://facebook.com/yourpage" ...>

<!-- Instagram example -->
<a href="https://instagram.com/yourhandle" ...>

<!-- YouTube example -->
<a href="https://youtube.com/@yourchannel" ...>
```

---

## 💡 Tips

- Always test on your phone before publishing
- Use images under 500 KB for fast loading (use [squoosh.app](https://squoosh.app) to compress)
- To add more gallery works, copy-paste an existing `<article class="gallery-card">` block
- To add a new project, copy-paste a `<article class="project-item">` block

---

*Built with care for a life of faith and beauty.*
