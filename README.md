# Engineering Leadership Team Landing Page

A modern single-page React application that spotlights the Engineering Leadership Team and their vision for AI-driven development. The experience is built with Vite and Material UI, delivering a dark, futuristic theme, smooth section transitions, and a responsive layout that works across desktop and mobile screens.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Customization Guide](#customization-guide)
- [Asset Management](#asset-management)
- [Deployment](#deployment)

## Getting Started

### Prerequisites
- Node.js **18.0.0** or higher (required by Vite 6)
- npm **9.0.0** or higher

### Installation
1. Clone the repository and install dependencies:
   ```bash
   git clone <repo-url>
   cd ELT
   npm install
   ```
2. Add team member images to `public/images` (see [Asset Management](#asset-management)).
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the URL printed in the terminal (typically `http://localhost:5173`) to view the site. The development server features instant reloads when you edit files.

### Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in the `dist` directory. |
| `npm run preview` | Serves the built assets locally so you can validate the production build. |
| `npm run lint` | Runs ESLint using the project configuration. |
| `npm run deploy` | Publishes the contents of `dist` to GitHub Pages using `gh-pages` (runs `npm run build` first via `predeploy`). |

## Project Structure
```
ELT/
├── public/
│   ├── 404.html
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Team.jsx
│   │   └── Vision.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Features
- **Animated hero banner** with a looping gradient background that introduces the Engineering Leadership Team vision.
- **Responsive navigation bar** that transitions on scroll, supports smooth in-page navigation, and collapses into a mobile drawer.
- **Team spotlight grid** with Material UI cards, hover animations, and support for custom imagery defined in a single array.
- **Vision statement section** using frosted glass styling to highlight the organization's mission.
- **Contact form** with Material UI inputs, required field validation, and a Snackbar confirmation message that can be wired to your backend.
- **Dark Material UI theme** applied globally via `ThemeProvider`, including custom colors and typography for a futuristic aesthetic.
- **GitHub Pages ready** thanks to the configured Vite `base` path and React Router `basename`, making static deployment straightforward.

## Customization Guide
- **Branding & theme**: Update colors, typography, or component overrides inside `src/App.jsx` where the Material UI theme is defined.
- **Navigation labels**: Modify the `navItems` array in `src/components/Navbar.jsx` to match your sections. Ensure the section components have corresponding `id` attributes.
- **Hero messaging**: Edit the copy in `src/components/Hero.jsx` to reflect your organization's tagline.
- **Team members**: Adjust the `teamMembers` array in `src/components/Team.jsx` to add, remove, or edit leaders. Provide matching image filenames in `public/images`.
- **Vision content**: Update the mission statement text in `src/components/Vision.jsx`.
- **Contact form**: Extend the state shape and submission handler in `src/components/Contact.jsx` to integrate with your backend or third-party services.
- **Routing base path**: If you are not hosting on GitHub Pages, change the `basename` in `src/main.jsx` and the `base` setting in `vite.config.js` to match your deployment.

## Asset Management
- Create a `public/images` directory (if it does not exist) and add team portraits referenced by the `Team` component (defaults: `leader1.jpg`, `leader2.jpg`, `leader3.jpg`).
- Use optimized JPG or PNG files around 600×600 pixels to keep the page lightweight while maintaining quality.
- Static assets placed in `public` are served as-is at the root of the deployed site, so reference them with `/images/<filename>` paths.

## Deployment
1. Ensure the `base` path in `vite.config.js` and the `basename` in `src/main.jsx` match your hosting environment (for GitHub Pages, set them to `/<repository-name>`).
2. Generate a production build:
   ```bash
   npm run build
   ```
3. Optionally preview the build locally:
   ```bash
   npm run preview
   ```
4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   The `deploy` script builds the project and publishes the `dist` directory to the `gh-pages` branch using the `gh-pages` package.

Feel free to tailor the content, imagery, and theme to match your team's story and branding.
