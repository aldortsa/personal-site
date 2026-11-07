# Aldair Ortiz — Photo Journal

A personal portfolio and career journal for Aldair Josue Ortiz Sancho, combining cloud engineering, platform work and photography from Japan.

The site uses a continuous editorial layout, scroll-linked photo parallax, Japanese-inspired SVG artwork and the original photographs in `public/photos`.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Search and link previews

Set `NEXT_PUBLIC_SITE_URL` to the public site origin before building/deploying (for example, `https://your-domain.com`). This enables the canonical URL and absolute Open Graph/Twitter image URLs. Without it, the page title and description are still available, but no production domain is assumed.

## Checks

```bash
npm run lint
npm run build
```
