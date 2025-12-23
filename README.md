# Jitendra Kumar - Portfolio Website

A modern, responsive, and professional portfolio built with **React**, **Vite**, and **Tailwind CSS**. This portfolio showcases my projects, technical blog posts, testimonials, and provides easy ways to get in touch.

## 🚀 Features

- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Tailwind CSS** - Beautiful styling with utility-first CSS framework
- 📝 **Technical Blog** - Share insights and technical experiences
- 💼 **Projects Showcase** - Highlight your best work with detailed descriptions
- 🗣️ **Testimonials** - Display feedback from colleagues and clients
- 📄 **Downloadable Resume** - Easy CV download functionality
- 📧 **Contact Form** - EmailJS integration for direct communication
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and build
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 4
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM 7
- **Icons:** Lucide React
- **Forms:** EmailJS
- **Markdown:** React Markdown
- **Deployment:** GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jitendra-kr-d/jitendrakr.git
   cd jitendrakr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `src/components/Contact.jsx`:
   ```javascript
   emailjs.sendForm(
     "your_service_id",    // Replace with your service ID
     "your_template_id",   // Replace with your template ID
     form.current,
     "your_public_key"     // Replace with your public key
   )
   ```

### Resume Setup

1. Place your resume PDF in `/public/Jitendra_Kumar_Resume.pdf`
2. (Optional) Add a preview image: `/public/Jitendra_Kumar_Resume_Preview.png`

### Profile Image

Place your profile image in `/public/profile.jpg`

## 📝 Content Customization

### Projects
Edit `src/data/projects.js` to add/modify your projects:
```javascript
{
  title: "Project Name",
  description: "Project description...",
  tech: ["React", "Node.js", "MongoDB"],
  link: "https://github.com/...",
  demo: "https://demo.com"
}
```

### Skills
Update `src/data/skills.js` to reflect your technical skills:
```javascript
{
  title: 'Skill Category',
  proficiencyLabel: 'Expert',
  proficiency: 95,
  skills: ['Skill 1', 'Skill 2'],
  Icon: IconComponent
}
```

### Blog Posts
Add blog posts in `src/data/blog.js`:
```javascript
{
  title: "Blog Post Title",
  date: "October 31, 2025",
  excerpt: "Brief excerpt...",
  content: `Full HTML content...`
}
```

### Testimonials
Update `src/data/testimonials.js`:
```javascript
{
  name: "Person Name",
  text: "Testimonial text...",
  role: "Job Title, Company"
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

**Important:** Update the `base` path in `vite.config.mjs`:
```javascript
export default defineConfig({
  base: "/your-repo-name",  // Replace with your repository name
});
```

## 📂 Project Structure

```
jitendrakr/
├── public/                  # Static assets
│   ├── profile.jpg
│   ├── Jitendra_Kumar_Resume.pdf
│   └── robots.txt
├── src/
│   ├── components/          # React components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── Testimonials.jsx
│   │   ├── DownloadCV.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/               # Data files
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── blog.js
│   │   └── testimonials.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.mjs
└── README.md
```

## 🎨 Customization Tips

1. **Colors**: Update primary colors in `tailwind.config.js`
2. **Fonts**: Add custom fonts in `index.html` and `tailwind.config.js`
3. **Animations**: Modify or add animations in `src/index.css`
4. **Layout**: Adjust component layouts in respective files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this project for your own portfolio.

## 📧 Contact

- **Email:** jitendrakumar64477@gmail.com
- **GitHub:** [Jitendra-kr-d](https://github.com/Jitendra-kr-d)
- **Portfolio:** [jitendra-kr-d.github.io/jitendrakr](https://jitendra-kr-d.github.io/jitendrakr)

---

Made with ❤️ by Jitendra Kumar