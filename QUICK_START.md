# 🚀 Quick Start Guide

## Before You Deploy

### 1. Configure EmailJS (Required for Contact Form)
```javascript
// File: src/components/Contact.jsx
// Replace these placeholders:
emailjs.sendForm(
  "your_service_id",    // ← Get from EmailJS dashboard
  "your_template_id",   // ← Get from EmailJS dashboard
  form.current,
  "your_public_key"     // ← Get from EmailJS dashboard
)
```

**Steps:**
1. Go to https://www.emailjs.com/ and sign up
2. Create an Email Service
3. Create an Email Template
4. Copy your Service ID, Template ID, and Public Key
5. Update Contact.jsx with your credentials
service_mul9xpb
---

### 2. Add Your Resume (Required)
```bash
# Place your resume in the public folder
public/Jitendra_Kumar_Resume.pdf

# Optional: Add a preview image for better UX
public/Jitendra_Kumar_Resume_Preview.png
```

---

### 3. Verify Base URL
```javascript
// File: vite.config.mjs
export default defineConfig({
  base: "/jitendrakr",  // ← Make sure this matches your repo name
});
```

---

## Build & Deploy

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Deploy to GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy

# Your site will be live at:
# https://jitendra-kr-d.github.io/jitendrakr/
```

---

## Customization Checklist

### Content Files to Update
- [ ] `src/data/projects.js` - Add your projects
- [ ] `src/data/skills.js` - Update your skills
- [ ] `src/data/blog.js` - Add blog posts
- [ ] `src/data/testimonials.js` - Add testimonials
- [ ] `public/profile.jpg` - Your profile photo

### Optional Customizations
- [ ] Update colors in `tailwind.config.js`
- [ ] Add your LinkedIn URL in Footer.jsx (line 39)
- [ ] Update GitHub username in links
- [ ] Add more social media links

---

## Testing Checklist

Before going live, test:
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Contact form submits successfully
- [ ] Resume downloads correctly
- [ ] All images load
- [ ] Responsive design on mobile/tablet
- [ ] No console errors
- [ ] All external links open in new tabs

---

## Common Issues & Solutions

### Issue: GitHub Pages shows 404 on refresh
**Solution:** The `404.html` file redirects to index.html. Make sure it's copied during build.

### Issue: Images not loading
**Solution:** Check that images are in the `public` folder and use correct paths with `import.meta.env.BASE_URL`

### Issue: Contact form not working
**Solution:** Verify EmailJS credentials are correct and service is active

### Issue: Styles not applying
**Solution:** Run `npm run build` again and check Tailwind configuration

---

## Performance Tips

1. **Optimize Images**: Compress images before adding to `public` folder
2. **Lazy Loading**: Images already use lazy loading
3. **Code Splitting**: Vite automatically splits code for better performance
4. **SEO**: Sitemap and robots.txt are already configured

---

## Support & Resources

- **Vite Docs**: https://vitejs.dev/
- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **EmailJS**: https://www.emailjs.com/docs/
- **Lucide Icons**: https://lucide.dev/

---

## 🎉 You're Ready!

Your portfolio is now ready to impress! Deploy and share your work with the world.

**Need help?** Check IMPROVEMENTS_SUMMARY.md for detailed changes made.
