# 🚀 Quick Deployment Guide

## Prerequisites
✅ GitHub account
✅ Vercel account (free tier works perfectly)
✅ 5 minutes of your time

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Vanessa Haughton website"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/vanessa-haughton-website.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `vanessa-haughton-website` repository
4. Vercel auto-detects Next.js - no configuration needed!
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment
7. 🎉 Your site is live!

### 3. Add Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `vanessahaughton.com`)
3. Follow DNS instructions from Vercel
4. Wait for DNS propagation (5-48 hours)

## Cursor + GitHub + Vercel Workflow

```bash
# Make changes in Cursor
# Save your changes

# Commit and push
git add .
git commit -m "Update services section"
git push

# Vercel automatically deploys! 🎉
# Check your deployment at vercel.com/dashboard
```

## Common Customizations

### Update Contact Email
File: `components/Contact.tsx` & `components/Footer.tsx`
```tsx
href="mailto:YOUR_EMAIL@example.com"
```

### Update Instagram Handle
File: `components/Contact.tsx` & `components/Footer.tsx`
```tsx
href="https://instagram.com/YOUR_HANDLE"
```

### Add Your Photo
1. Save photo as `vanessa.jpg` in `/public` folder
2. Edit `components/About.tsx`:
```tsx
<img src="/vanessa.jpg" alt="Vanessa Haughton" 
     style={{width: '100%', height: '100%', objectFit: 'cover'}} />
```

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --terracotta: #YOUR_COLOR;
  --deep-green: #YOUR_COLOR;
  /* etc. */
}
```

## Troubleshooting

**Build fails?**
```bash
npm run build
# Fix any errors shown
```

**Changes not showing?**
- Wait 1-2 minutes for Vercel deployment
- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Check Vercel dashboard for deployment status

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

---

**That's it!** Your site is production-ready and will auto-deploy on every push to GitHub.
