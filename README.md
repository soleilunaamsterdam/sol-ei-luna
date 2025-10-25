# Sol el Luna — Website (Static)

This repository contains the static website for **Sol el Luna** (Tapas Restaurant & Cocktailbar, De Pijp — Amsterdam).

## Tech
- Pure **HTML/CSS/JS** (no framework).
- Optimized for free static hosting.
- Mobile responsive.

## Deploy options

### 1) GitHub Pages (free)
1. Create a new repo named `sol-el-luna` on GitHub.
2. On your machine:
   ```bash
   git clone https://github.com/<your-username>/sol-el-luna.git
   cd sol-el-luna
   # copy these files into the folder (or unzip here)
   git add .
   git commit -m "Initial commit: Sol el Luna static site"
   git branch -M main
   git push -u origin main
   ```
3. GitHub will run the included workflow and publish to **Pages** automatically.
4. In **Settings → Pages**, ensure "Build and deployment" is set to "GitHub Actions".

### 2) Netlify (free)
- Drag & drop the folder at https://app.netlify.com/drop or connect your Git repo.
- Uses the included `netlify.toml` (no build command).

### 3) Vercel (free)
- Go to https://vercel.com/new, import the GitHub repo.
- It will detect a static site (no build command) and deploy.

### 4) Cloudflare Pages (free)
- Go to https://dash.cloudflare.com → Pages → Create project → Connect to Git.
- Framework preset: **None**. Build command: **None**. Output dir: **/**.

## Customize
- Replace the placeholder images in `/assets` with your photos.
- Update opening hours, contact numbers, and booking link in `index.html`.
- Favicons: add a `favicon.ico` to the root for a browser icon.

## Local preview
Just open `index.html` in a browser — or run a tiny server:
```bash
python3 -m http.server 3000
# open http://localhost:3000
```

## License
© Sol el Luna. All rights reserved.
