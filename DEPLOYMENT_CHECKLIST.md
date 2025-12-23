# 📋 Pre-Deployment Checklist

Use this checklist before deploying your portfolio to ensure everything is configured correctly.

## ✅ Configuration

### EmailJS Setup
- [ ] Created EmailJS account
- [ ] Created Email Service
- [ ] Created Email Template
- [ ] Updated `src/components/Contact.jsx` with Service ID
- [ ] Updated `src/components/Contact.jsx` with Template ID
- [ ] Updated `src/components/Contact.jsx` with Public Key
- [ ] Tested contact form submission

### Resume Files
- [ ] Added `Jitendra_Kumar_Resume.pdf` to `/public` folder
- [ ] Added `Jitendra_Kumar_Resume_Preview.png` to `/public` folder (optional)
- [ ] Verified resume downloads correctly

### Profile & Images
- [ ] Added `profile.jpg` to `/public` folder
- [ ] Image is optimized and compressed
- [ ] Image displays correctly on home page

### Repository Settings
- [ ] Verified base URL in `vite.config.mjs` matches repo name
- [ ] Repository is public (required for GitHub Pages)
- [ ] GitHub Pages is enabled in repository settings

---

## ✅ Content Review

### Data Files
- [ ] Updated `src/data/projects.js` with your projects
- [ ] Updated `src/data/skills.js` with your skills
- [ ] Updated `src/data/blog.js` with blog posts
- [ ] Updated `src/data/testimonials.js` with testimonials
- [ ] All project links are correct and working
- [ ] All demo links are correct and working

### Personal Information
- [ ] Updated name in all components (if needed)
- [ ] Updated email address in Footer.jsx
- [ ] Updated email address in Contact.jsx
- [ ] Updated GitHub username in Footer.jsx
- [ ] Added LinkedIn profile URL in Footer.jsx (if available)
- [ ] Updated meta tags in `index.html` with your info

---

## ✅ Testing

### Functionality Testing
- [ ] Tested all navigation links
- [ ] Tested mobile menu (open/close)
- [ ] Tested ESC key to close mobile menu
- [ ] Tested contact form submission
- [ ] Tested resume download button
- [ ] Tested "View in Browser" button for resume
- [ ] Tested all external links (open in new tab)
- [ ] Tested back to top button
- [ ] Tested scroll to top on route change
- [ ] Verified 404 page works

### Responsive Testing
- [ ] Tested on mobile device (or Chrome DevTools)
- [ ] Tested on tablet (or Chrome DevTools)
- [ ] Tested on desktop
- [ ] All pages are responsive
- [ ] Mobile menu works correctly
- [ ] Footer displays correctly on all devices
- [ ] Forms are usable on mobile

### Browser Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari (if available)
- [ ] Tested on Edge
- [ ] No console errors in any browser

### Content Review
- [ ] All text is readable and professional
- [ ] No typos or grammatical errors
- [ ] All dates are current and accurate
- [ ] All images load correctly
- [ ] No broken links

---

## ✅ Performance & SEO

### Build Optimization
- [ ] Run `npm run build` successfully
- [ ] No build errors or warnings
- [ ] Build size is reasonable (check dist folder)
- [ ] Previewed production build (`npm run preview`)

### SEO Checklist
- [ ] Meta description in `index.html` is accurate
- [ ] Meta keywords are relevant
- [ ] Open Graph tags are correct
- [ ] Twitter Card tags are correct
- [ ] `robots.txt` is in public folder
- [ ] `sitemap.xml` is in public folder
- [ ] Page titles are descriptive

### Performance
- [ ] Images are optimized/compressed
- [ ] No unnecessary dependencies
- [ ] Code is minified in production
- [ ] Lazy loading is working for images
- [ ] Smooth scrolling works

---

## ✅ Security & Privacy

- [ ] No sensitive information in code
- [ ] No API keys hardcoded (except EmailJS public key)
- [ ] No personal passwords or credentials in code
- [ ] `.env` files (if any) are in `.gitignore`
- [ ] Email address is valid and monitored

---

## ✅ Final Steps

### Pre-Deploy
- [ ] Committed all changes to git
- [ ] Pushed changes to GitHub
- [ ] Verified `gh-pages` branch will be created
- [ ] Reviewed all changes one last time

### Deploy
```bash
# Run deployment command
npm run deploy
```

- [ ] Deployment completed successfully
- [ ] No deployment errors

### Post-Deploy
- [ ] Visited live site URL
- [ ] Tested all functionality on live site
- [ ] Tested contact form on live site
- [ ] Tested on mobile device
- [ ] Shared portfolio link with friends for feedback

---

## 🎯 Success Criteria

Your portfolio is ready when:
✅ All links work without errors
✅ Contact form sends emails successfully
✅ Resume downloads correctly
✅ Site is fully responsive
✅ No console errors
✅ Content is accurate and professional
✅ Loading speed is fast
✅ Site works on multiple browsers

---

## 📞 Support

If you encounter issues:
1. Check `QUICK_START.md` for common solutions
2. Check `IMPROVEMENTS_SUMMARY.md` for detailed documentation
3. Review browser console for errors
4. Check GitHub Pages deployment logs

---

## 🎉 Ready to Deploy!

Once all items are checked, run:
```bash
npm run deploy
```

Your portfolio will be live at:
```
https://jitendra-kr-d.github.io/jitendrakr/
```

**Good luck! 🚀**

---

## 📝 Post-Launch TODO

After deployment, consider:
- [ ] Share portfolio on LinkedIn
- [ ] Share portfolio on Twitter/X
- [ ] Add portfolio link to GitHub profile
- [ ] Add portfolio link to resume
- [ ] Submit to portfolio directories
- [ ] Set up analytics (Google Analytics/Plausible)
- [ ] Set up custom domain (optional)
- [ ] Regular content updates (blog posts)
- [ ] Keep projects list updated
