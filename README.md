# Mwansa Kunda — Portfolio

Personal portfolio website built with React + Vite showcasing projects, skills and contact information.

Demo: (Add your deployed URL here)

## Table of contents
- About
- Features
- Tech stack
- Project structure
- Getting started
  - Prerequisites
  - Install
  - Development
  - Build / Preview
- Environment / Configuration
- Deployment
- Contributing
- License
- Contact

## About
This is a single-page portfolio site built to present projects, skills, and contact information. It uses Vite for bundling and React for the UI, with Tailwind CSS for styling.

## Features
- Responsive single-page layout with sections: Hero, About, Projects, Contact, Footer
- Smooth scrolling navigation
- Component-based React structure for easy customization
- Sample projects and skills listing loaded from `src/data.js`

## Tech stack
- React 19
- Vite
- Tailwind CSS
- Lucide icons
- Axios (installed but optional usage)
- Node / npm

(See package.json for exact versions.)

## Project structure
- `index.html` — app root and meta
- `package.json` — scripts & dependencies
- `src/`
  - `main.jsx` — app entry
  - `App.jsx` — layout (Header, Hero, About, Projects, Contact, Footer)
  - `components/` — React components (Header.jsx, Hero.jsx, About.jsx, etc.)
  - `data.js` — projects and skills used by the site
- `public/` — static assets (if used)
- `images/` — image assets (profile, project thumbnails)

## Getting started

### Prerequisites
- Node.js (recommended v18+)
- npm (or use pnpm/yarn if you prefer)

### Install
Clone the repo and install dependencies:

```bash
git clone https://github.com/Joshk21758/portfolio.git
cd portfolio
npm install
```

### Development
Start the dev server (the project is configured to run on port 3000):

```bash
npm run dev
```

Open http://localhost:3000

### Build / Preview
Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Other scripts:
- `npm run clean` — removes `dist` and `server.js` (as configured)
- `npm run lint` — placeholder: currently prints "Linting disabled"

## Environment / Configuration
- `dotenv` is listed as a dependency; if you add server/API calls or require environment variables, create a `.env` file in the project root and reference with `import.meta.env` or `process.env` depending on how you configure it.
- Profile image path referenced at `images/myprofile.jpg` — replace that image to update the portrait.

## Deployment
You can deploy the built static site to most static hosts:
- Vercel: automatic for Vite + React projects (connect the repo and set the build command to `npm run build` if needed)
- Netlify: set build command `npm run build` and publish `dist/`
- GitHub Pages: build to `dist/` and publish that folder (tools like gh-pages or CI can help)

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/update-readme`
3. Make your changes and commit: `git commit -m "describe changes"`
4. Push and open a pull request

If you want automated contribution checks or a PR template, I can add those.

## Suggested next steps (optional)
- Add a LICENSE file (MIT recommended if you want open use)
- Add a project description and topics to the repo (for discoverability)
- Add a deployed demo link and screenshots in the README
- Add automated previews via GitHub Actions or Vercel

## License
Add a license file to declare usage terms. I can add an MIT license file if you want.

## Contact
- GitHub: https://github.com/Joshk21758
- LinkedIn: https://www.linkedin.com/in/mwansa-kunda-0bbb6540a
