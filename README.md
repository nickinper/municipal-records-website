# Municipal Records Processing LLC - Website

Professional website for Stripe compliance and customer trust.

## Quick Deploy to GitHub Pages (30 minutes)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `mpr-llc.github.io` (or your-username.github.io)
3. Make it Public
4. Don't initialize with README

### Step 2: Push Website Files
```bash
cd municipal-records-website
git init
git add .
git commit -m "Initial website for Municipal Records Processing LLC"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mpr-llc.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Source: Deploy from a branch
4. Branch: main, folder: / (root)
5. Click Save

### Step 4: Website Live!
Your website will be available at:
- https://mpr-llc.github.io (if that's your repo name)
- or https://YOUR-USERNAME.github.io

## Website Features

✅ **Stripe Compliance Ready**
- Clear business name and description
- Transparent pricing ($49 per request)
- Contact information on every page
- Comprehensive refund policy
- Detailed terms of service

✅ **Professional Design**
- Clean, modern layout
- Mobile responsive
- Fast loading
- Clear navigation
- Trust-building elements

✅ **Key Pages**
1. **Homepage** - Service overview, pricing, how it works
2. **Contact** - Multiple contact methods, support info
3. **Terms** - Complete terms of service
4. **Refunds** - Clear refund and dispute policy

## Custom Domain (Optional - 1 hour)

### Option 1: With GitHub Pages
1. Buy domain at Namecheap/GoDaddy ($12/year)
2. Add CNAME file to repository with your domain
3. Configure DNS:
   - A records to GitHub IPs
   - CNAME record to your-username.github.io
4. Enable HTTPS in GitHub Pages settings

### Option 2: With Vercel (Recommended)
1. Sign up at vercel.com (free)
2. Import this repository
3. Deploy (automatic)
4. Add custom domain in Vercel dashboard
5. Update DNS records

## Updating Content

To update the website:
1. Edit the HTML files locally
2. Commit and push to GitHub
3. Changes go live automatically (2-5 minutes)

## Important URLs to Update

When you get your custom domain, update these emails in all HTML files:
- support@municipalrecordsprocessing.com
- enterprise@municipalrecordsprocessing.com
- billing@municipalrecordsprocessing.com
- disputes@municipalrecordsprocessing.com
- legal@municipalrecordsprocessing.com

## SEO Checklist

- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Add meta descriptions (already included)
- [ ] Verify all links work
- [ ] Test on mobile devices

## Stripe Integration

Once website is live:
1. Add website URL to Stripe account settings
2. Configure webhook endpoint: https://your-api-domain.com/webhooks/stripe
3. Update return URLs in Stripe dashboard
4. Test payment flow end-to-end

## Support

This website satisfies all Stripe requirements for business verification:
- Business name clearly displayed
- Service description matches Stripe account
- Pricing transparency
- Customer support information
- Refund/dispute handling process
- Terms of service

Deploy now and start processing payments!