# EValue Consulting — Website

Static website for Elisa Vitella / EValue Consulting.  
Bilingual IT/EN · No framework · No monthly cost.

---

## Structure

```
evalue-consulting/
├── index.html          ← Single HTML file (all pages)
├── netlify.toml        ← Netlify config (forms + headers)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── i18n.js         ← IT/EN translations
│   └── main.js         ← Navigation, rendering, accordion
└── images/
    ├── logo.png         ← EValue Consulting logo
    └── elisa-vitella.jpg ← Portrait photo
```

---

## Deploy on Netlify (free, zero monthly cost)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) → New repository
2. Name it `evalue-consulting` (or any name)
3. Set it to **Private**
4. Upload all files from this folder (drag & drop or use GitHub Desktop)

### Step 2 — Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** and select your repository
4. Build settings — leave everything blank (static site, no build command)
5. Click **Deploy site**

Your site will be live at a Netlify URL (e.g. `your-site-name.netlify.app`) in under 1 minute.

### Step 3 — Add your custom domain

1. In Netlify → Site settings → Domain management → Add custom domain
2. Enter your domain (e.g. `evalueconsulting.com`)
3. Follow DNS instructions (add the CNAME or A records to your domain registrar)
4. Netlify provides a free SSL certificate automatically

### Step 4 — Enable the contact form

The contact form uses **Netlify Forms** — no backend or third-party service needed.

1. After your first deploy, go to Netlify → Forms
2. You will see the `contact` form automatically detected
3. Go to **Form notifications → Add notification → Email notification**
4. Enter `e.vitella@evalueconsulting.com` as the recipient
5. Done — form submissions arrive directly in your inbox

---

## Making changes

### To update text content
Edit the translation strings in `js/i18n.js`.  
Both IT and EN versions are clearly labelled.

### To update images
Replace `images/logo.png` or `images/elisa-vitella.jpg`.  
Keep the same filenames.

### To update styles
Edit `css/style.css`.

### To deploy changes
1. Push the updated files to GitHub
2. Netlify automatically redeploys in ~30 seconds

---

## Local preview

Open `index.html` directly in your browser — no server needed.  
(The contact form will not work locally — only on Netlify.)

---

## Technical notes

- No JavaScript framework — plain HTML/CSS/JS
- Google Fonts loaded via CDN (Lora + Jost)
- Language preference stored in `localStorage`
- Fully responsive down to 375px (mobile)
- Contact form powered by Netlify Forms (free tier: 100 submissions/month)
- SSL/HTTPS included free via Netlify
- No cookies, no tracking, no GDPR issues out of the box
