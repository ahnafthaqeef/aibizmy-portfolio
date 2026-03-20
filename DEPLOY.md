# Deploy to Cloudflare Pages + Custom Domain

## Step 1 — Push to GitHub

1. Create a new GitHub repo (e.g. `portfolio-site`)
2. Push the `portfolio-site/` folder to it:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
   git push -u origin main
   ```

## Step 2 — Deploy on Cloudflare Pages

1. Go to **Cloudflare Dashboard** → **Pages** → **Create a project**
2. Connect your GitHub account and select the repo
3. Build settings:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (root)
4. Click **Save and Deploy**

Your site will be live at: `https://portfolio-site.pages.dev`

## Step 3 — Add Your Custom Domain

1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g. `ahnafthaqeef.com`)
4. Cloudflare will automatically configure the DNS records since your domain is already on Cloudflare

That's it — HTTPS is automatic, CDN is global, deployments are automatic on every git push.

## Step 4 — Add Contact Form (Optional)

The contact form currently simulates a send. To make it real:

### Option A: Formspree (easiest)
1. Sign up at https://formspree.io
2. Create a form → get your endpoint URL
3. In `js/main.js`, replace the `await new Promise(...)` line with:
   ```js
   const data = new FormData(form);
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     body: data,
     headers: { Accept: 'application/json' }
   });
   ```

### Option B: Cloudflare Workers (stays on Cloudflare)
Use a Worker to forward form submissions to your email.
