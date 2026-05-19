# Pacific Ocean Tech — Website

A complete, production-ready static website for **Pacific Ocean Tech** built with modern web technologies.

## 🛠️ Tech Stack
- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4
- **Content:** MDX (`@astrojs/mdx`)
- **SEO:** `@astrojs/sitemap`
- **UI & Animations:** React, Framer Motion, Lucide Icons

## 🚀 Setup & Development

### Prerequisites
- Node.js 18+
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the local dev server:
```bash
npm run dev
```
The site will be available at `http://localhost:4321`.

### Build for Production
Create a production build:
```bash
npm run build
```
The static files will be generated in the `/dist` directory.

### Preview Production Build
Preview the generated static site locally:
```bash
npm run preview
```

## 📄 Project Structure
- `src/pages/` - Astro pages (Routing)
- `src/components/` - Shared UI components (Astro & React)
- `src/layouts/` - Page layouts
- `src/data/` - Static data (Services, Testimonials, Team, etc.)
- `src/content/` - MDX content collections (Blog posts)
- `src/styles/` - Global CSS and Tailwind configuration
- `public/` - Static assets (Favicon, robots.txt, llms.txt)

## 🎨 Design System
The site uses a custom "Deep Ocean Futurism" design system configured in `src/styles/global.css` using Tailwind CSS 4's new `@theme` directive.
- **Primary:** Deep Ocean (#0A1628)
- **Accent:** Aqua Glow (#00D4FF)
- **Typography:** Space Grotesk (Headings), Inter (Body), JetBrains Mono (Accents)

## 🔍 SEO & GEO
- Full Open Graph & Twitter card support
- Auto-generated `sitemap.xml`
- `llms.txt` included for AI crawler optimization
- JSON-LD schemas can be added per page
