# Greece Holiday Itinerary Planner - Static Build

This is a static HTML build of the Greece Holiday Itinerary Planner web application. The build preserves all functionality and appearance of the original React/TypeScript application, and is ready for deployment on platforms like Render via GitHub.

## Contents

- `index.html` - The main HTML file
- `index.js` - The compiled JavaScript bundle
- `index.css` - The stylesheet

## Deployment Instructions for Render via GitHub

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "greece-holiday-planner")
4. Choose "Public" or "Private" visibility as preferred
5. Click "Create repository"

### Step 2: Upload the Static Build to GitHub

Using GitHub Desktop or command line:

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit - Static build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to [Render](https://render.com/) and sign in or create an account
2. Click "New" and select "Static Site"
3. Connect your GitHub account if not already connected
4. Select the repository you created in Step 1
5. Configure your static site:
   - Name: Choose a name for your site (e.g., "greece-holiday-planner")
   - Branch: main
   - Build Command: Leave empty (no build needed for pre-built static files)
   - Publish Directory: `.` (root directory)
6. Click "Create Static Site"

Render will automatically deploy your site and provide you with a URL (e.g., `https://greece-holiday-planner.onrender.com`).

## Features

- Interactive itinerary with day-by-day plans
- Map overview with location markers
- Accommodation, beaches, and restaurant information
- Responsive design for desktop, tablet, and mobile devices
- Cross-browser compatibility

## Browser Compatibility

This static build has been tested and works on all major browsers:
- Chrome
- Firefox
- Safari
- Edge

## Notes

- The application uses client-side routing with hash-based URLs
- All data is contained within the JavaScript bundle
- No backend or database is required
