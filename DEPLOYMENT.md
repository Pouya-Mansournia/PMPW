# Deployment Guide

This project is a Vite + React app configured for GitHub Pages with the custom domain `mansournia.info`.

## 1. Install Dependencies

Run this once after cloning the repository:

```bash
npm install
```

## 2. Build Locally

Verify the production build before publishing:

```bash
npm run build
```

Vite writes the production files to `dist/`. The build also prerenders clean route directories and runs SEO validation. Do not deploy if that validation fails.

Optional owner-supplied verification tokens can be injected at build time without committing them:

```powershell
$env:GOOGLE_SITE_VERIFICATION='owner-provided-token'
$env:BING_SITE_VERIFICATION='owner-provided-token'
npm run build
```

Use real tokens only. DNS verification remains the preferred option for a Google Search Console Domain property.

## 3. Deploy to GitHub Pages

Publish the `dist/` folder to the `gh-pages` branch:

```bash
npm run deploy
```

The `predeploy` script runs `npm run build` automatically before publishing.

## 4. Configure GitHub Pages

In the GitHub repository:

1. Open **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `gh-pages`.
5. Set the folder to `/ (root)`.
6. Click **Save**.

GitHub Pages will serve the files published by `npm run deploy`.

After deployment, verify direct requests to `/about/`, `/projects/`, `/research/`, `/articles/`, and project detail routes. Each route is emitted as its own `index.html` directory entry so it works without a client-side hash.

## 5. Configure the Custom Domain

In **Settings > Pages**:

1. Enter `mansournia.info` in **Custom domain**.
2. Click **Save**.
3. Wait for GitHub to verify the domain.
4. Enable **Enforce HTTPS** after DNS verification completes.

The repository includes `public/CNAME`, so each Vite build copies the domain file into `dist/CNAME` and preserves the custom domain during deployment.

## 6. Required DNS Records

At your DNS provider, configure these records for the apex domain:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Configure this record for the `www` subdomain:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | YOUR_GITHUB_USERNAME.github.io |

For this repository owner, replace `YOUR_GITHUB_USERNAME.github.io` with:

```text
Pouya-Mansournia.github.io
```

DNS changes can take time to propagate. After propagation, GitHub Pages should serve:

```text
https://mansournia.info
```

## 7. Vite Base Path

The Vite `base` is set to `/`, which is the correct setting for a GitHub Pages site served from a custom apex domain. Repository subpath deployments use a value like `/PortfolioWeb/`, but custom-domain deployments should use `/`.
