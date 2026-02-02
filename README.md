# Vanessa Haughton - Personal Branding Website

A sophisticated personal branding website for Chef Vanessa Haughton, BBC Masterchef 2022 contestant and creator of Set the Table. Built with Next.js, TypeScript, and Framer Motion.

## Features

- 🎨 **Editorial/Magazine Aesthetic** - Organic, refined design inspired by high-end food publications
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ✨ **Smooth Animations** - Elegant page transitions and micro-interactions using Framer Motion
- 🎯 **Three Service Offerings**:
  - Set the Table (premium food delivery)
  - Supper Clubs (intimate dining experiences)
  - Private Chef Services (bespoke culinary events)
- 📧 **Contact Form** - Easy inquiry system for potential clients
- 🔗 **Social Integration** - Links to Instagram and Set the Table website

## Design Philosophy

The website uses a warm, earthy color palette inspired by fresh ingredients:
- **Cream & Warm White** - Primary backgrounds
- **Terracotta & Burnt Orange** - Accent colors
- **Deep Green & Sage** - Secondary accents
- **Typography**: Playfair Display (display), Crimson Text (body), Cormorant Garamond (accents)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- A Vercel account (for deployment)

### Installation

1. **Clone or download this project**:
   ```bash
   cd vanessa-haughton-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization Guide

### Adding Images

1. Add images to the `/public` folder
2. Update the placeholder in `components/About.tsx`:
   ```tsx
   <div className={styles.imagePlaceholder}>
     <img src="/your-photo.jpg" alt="Vanessa Haughton" />
   </div>
   ```

### Updating Contact Information

Edit `components/Contact.tsx` and `components/Footer.tsx`:
- Update email addresses
- Update Instagram handle
- Update any social media links

### Modifying Services

Edit the `services` array in `components/Services.tsx`:
```tsx
const services = [
  {
    icon: Truck,
    title: 'Your Service Name',
    subtitle: 'Service Tagline',
    description: 'Service description...',
    features: ['Feature 1', 'Feature 2'],
    link: 'https://your-link.com',
    color: 'var(--terracotta)'
  }
];
```

### Color Scheme

Modify CSS variables in `app/globals.css`:
```css
:root {
  --cream: #FFF8F0;
  --terracotta: #D4735C;
  /* Add or modify colors */
}
```

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/vanessa-haughton-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## Cursor IDE Integration

This project is optimized for Cursor IDE:

1. **Open in Cursor**:
   ```bash
   cursor .
   ```

2. **Useful Cursor Features**:
   - Use Cmd/Ctrl+K for AI-assisted code editing
   - Use Cmd/Ctrl+L for chat with codebase context
   - Cursor will understand the project structure automatically

## File Structure

```
vanessa-haughton-website/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services showcase
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── *.module.css        # Component-specific styles
├── public/                  # Static assets (add images here)
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── README.md              # This file
```

## Performance Optimization

The site is optimized for:
- ✅ Fast initial page load
- ✅ Smooth animations (60fps)
- ✅ SEO-friendly meta tags
- ✅ Mobile-first responsive design
- ✅ Accessibility standards

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support & Contact

For technical support or questions about the website:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check Vercel deployment docs: [vercel.com/docs](https://vercel.com/docs)

## License

© 2026 Vanessa Haughton. All rights reserved.

---

Built with ❤️ for exceptional culinary experiences
