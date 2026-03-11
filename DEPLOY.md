# Deploy Your Portfolio to Your Domain & Hosting

Your project is a **Next.js 15** app with a **chatbot** that uses a server API route. To have the full site (including the chatbot) work, your hosting must support **Node.js**.

---

## Option 1: Easiest — Vercel or Netlify + Your Domain (Recommended)

Both support Next.js and API routes. You keep your domain; they host the app.

### Vercel (great for Next.js)

1. **Push your project to GitHub** (if not already):
   - Create a repo, then: `git init`, `git add .`, `git commit -m "Portfolio"`, `git remote add origin <your-repo-url>`, `git push -u origin main`

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com) → Sign in → **Add New Project** → Import your GitHub repo.
   - Leave build settings as default (`npm run build`, output: Next.js).
   - Under **Environment Variables**, add: `XAI_API_KEY` = your xAI API key (needed for the chatbot).
   - Deploy. You’ll get a URL like `your-project.vercel.app`.

3. **Use your domain**:
   - Project → **Settings** → **Domains** → Add your domain (e.g. `firoze.com`).
   - In your domain registrar’s DNS, add the records Vercel shows (usually an A record or CNAME). Save and wait for DNS to propagate.

### Netlify

1. Push project to GitHub (as above).
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git** → choose repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next` (Netlify has a Next.js plugin; if you use “Deploy with Netlify” it often auto-fills this).
   - Or use **Netlify’s “Next.js” template** so it detects Next.js and sets everything.
4. **Environment variables**: In Site settings → Environment variables, add `XAI_API_KEY`.
5. **Custom domain**: Site settings → Domain management → Add custom domain → follow DNS instructions at your registrar.

---

## Option 2: Your Own Hosting with Node.js (VPS / Cloud)

If your hosting gives you **SSH and Node.js** (e.g. a VPS, DigitalOcean, AWS, or a shared host with Node support):

### 1. Build locally (or on the server)

```bash
npm ci
npm run build
```

### 2. Upload to the server

Upload the whole project folder (including `.next`, `node_modules`, `package.json`, `public`, `next.config.ts`, `src`, etc.), or clone from Git on the server and run `npm ci && npm run build` there.

### 3. Set the API key

On the server, set the environment variable (replace with your real key):

- **Linux/macOS:** `export XAI_API_KEY=your_xai_api_key_here`
- Or in a `.env.local` file in the project root (same content: `XAI_API_KEY=...`). Next.js loads `.env.local` in development and when you run `next start`.

### 4. Run the app

```bash
npm start
```

This runs the app on port **3000**. Keep it running (e.g. with **PM2**):

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### 5. Point your domain to the server

- In your registrar’s DNS, set an **A record** for your domain to your server’s IP.
- On the server, use **Nginx** (or Apache) as a reverse proxy to `http://localhost:3000` and optionally add SSL (e.g. Let’s Encrypt). Example Nginx server block:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Restart Nginx after editing config. Then visit `http://yourdomain.com`.

---

## Option 3: Static-Only Hosting (FTP / cPanel, no Node.js)

If your host only allows **static files** (FTP or cPanel File Manager, no Node.js):

- The site **can** be exported as static HTML/CSS/JS, but the **chatbot will not work** (it needs the `/api/chat` server route).

Steps:

1. **Enable static export** in `next.config.ts` (see below).
2. Build: `npm run build`. The static site will be in the `out` folder.
3. Upload **everything inside `out`** to your host’s **public folder** (often `public_html` or `www`).
4. Point your domain to that folder (usually already set on cPanel).

To enable static export, in `next.config.ts` set:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

**Note:** After adding `output: "export"`, the API route is not included. The chatbot will fail until you either move to Node.js hosting or replace it with a client-only solution (e.g. calling an external API from the browser).

---

## Checklist Before Launch

- [ ] **xAI API key**: For the chatbot, create/get an API key from xAI and set it as `XAI_API_KEY` in your deployment environment (Vercel, Netlify, or server).
- [ ] **Build**: Run `npm run build` successfully (no red errors).
- [ ] **Domain DNS**: For Vercel/Netlify, add the A or CNAME record they provide; for your own server, point the A record to the server IP.
- [ ] **HTTPS**: Prefer HTTPS. Vercel/Netlify provide it automatically; on your own server, use Let’s Encrypt (e.g. Certbot) with Nginx/Apache.

Once you know whether your hosting is “with Node.js” or “static only,” you can follow Option 2 or 3; if you’re open to it, Option 1 is the fastest way to launch with your domain and full chatbot support.
