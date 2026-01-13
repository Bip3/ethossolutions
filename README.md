# Ethos Solutions - Corporate Website

A modern, SEO-optimized corporate website for Ethos Solutions, a leading provider of enterprise payment solutions. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

### Technical Stack
- **Next.js 14+** with App Router for optimal SEO and performance
- **TypeScript** for type safety
- **Tailwind CSS v4** for modern, responsive styling
- **React Hook Form + Zod** for robust form validation
- **Lucide React** for consistent iconography

### SEO Optimization
- Server-side rendering (SSR) for all pages
- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for rich snippets
- Automatic sitemap generation
- Optimized robots.txt
- Semantic HTML5 markup
- Mobile-first responsive design

### Pages
1. **Home** - Hero section, features, benefits, and statistics
2. **Services** - Detailed payment solution offerings
3. **Portfolio** - Case studies and success stories
4. **About** - Company mission, values, and timeline
5. **Contact** - Form with validation and contact information

### Design Features
- Professional corporate color scheme (blues and grays)
- Sticky navigation header with mobile menu
- Comprehensive footer with sitemap
- Smooth scrolling and transitions
- Fully responsive across all devices
- Accessibility compliant (WCAG AA)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ethos-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ethos-website/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── portfolio/      # Portfolio/case studies
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles with color scheme
│   ├── sitemap.ts      # Sitemap configuration
│   └── robots.ts       # Robots.txt configuration
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with links
│   └── StructuredData.tsx  # JSON-LD structured data
└── public/             # Static assets
```

## Customization

### Colors
Edit the color palette in `app/globals.css`:
```css
:root {
  --primary: #0F4C81;      /* Deep Blue */
  --secondary: #2C8EBB;    /* Lighter Blue */
  --accent: #00A8E8;       /* Bright Blue */
  /* ... */
}
```

### Content
- Update company information in components
- Modify meta tags in `app/layout.tsx`
- Update structured data in `components/StructuredData.tsx`
- Change contact information in `components/Footer.tsx`

### Forms
The contact form uses React Hook Form with Zod validation. To integrate with a backend:
1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission handler in `app/contact/page.tsx`

## SEO Checklist

- [x] Comprehensive meta tags
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast loading times
- [x] Optimized images (Next.js Image component ready)

## Performance

The site is optimized for high Lighthouse scores:
- Static page generation for instant loading
- Automatic code splitting
- Optimized font loading
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

## License

Proprietary - Ethos Solutions

## Support

For questions or support, contact: info@ethossolutions.tech
