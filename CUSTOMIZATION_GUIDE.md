# Portfolio Customization Guide

This guide will help you personalize your macOS portfolio with your own content.

## Quick Customization Checklist

### 1. Personal Information (src/constants/index.js)

#### Update Your Name
- Line 429: Change "Adrian" to "Soufiane" (or your name)
- Line 427: Update subtitle if desired

#### Update Social Links (around line 160)
```javascript
const socials = [
  {
    id: 1,
    text: "Github",
    link: "https://github.com/YOUR_USERNAME", // ✅ Already updated to thebighidden
  },
  {
    id: 2,
    text: "Portfolio",
    link: "https://YOUR_WEBSITE.com", // Update this
  },
  {
    id: 3,
    text: "Twitter/X",
    link: "https://x.com/YOUR_HANDLE", // Update this
  },
  {
    id: 4,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/YOUR_PROFILE", // Update this
  },
];
```

#### Update Tech Stack (around line 120)
✅ Already customized with your stack

#### Update Blog Posts (around line 100)
✅ Already updated with placeholder content

### 2. Projects (WORK_LOCATION section)

Update the 3 project folders with your own projects:
- Project names
- Descriptions
- Links
- Images (replace in /public/images/)

### 3. Images to Replace

Replace these images in `/public/images/`:
- `adrian.jpg` → Your photo
- `adrian-2.jpg` → Your casual photo
- `adrian-3.jpeg` → Your conference/professional photo
- `project-1.png` → Your project 1 screenshot
- `project-2.png` → Your project 2 screenshot
- `project-3.png` → Your project 3 screenshot
- `blog1.png`, `blog2.png`, `blog3.png` → Your blog post images
- `gal1.png` - `gal4.png` → Your gallery images

### 4. Resume

Replace `/public/files/resume.pdf` with your own resume PDF

### 5. Navbar Logo

Update `/public/images/logo.svg` with your own logo

### 6. Page Title

In `index.html`, change:
```html
<title>THEBIGHIDDEN UNIVERSE</title>
```

## What's Already Customized ✅

- GitHub link → thebighidden
- Social media placeholders
- Tech stack updated
- Blog posts updated with placeholder dates
- Name in navbar → Soufiane

## Next Steps

1. Replace all images mentioned above
2. Update project descriptions in `src/constants/index.js`
3. Add your resume PDF
4. Update the "About Me" description (line 429-432 in constants/index.js)
5. Test locally with `npm run dev`

## Tips

- Keep image sizes reasonable (under 1MB each)
- Use high-quality screenshots for projects
- Make sure your resume PDF is up to date
- Test all links before deploying
