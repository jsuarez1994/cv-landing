# jsuarez1994 — Portfolio CV

Personal portfolio built with React and Vite, styled as an old-school terminal interface.

## Features

- Terminal-style design: black background, pixelated green text, CRT scanlines
- Typing animation on hero section with blinking cursor
- Vertical experience timeline with animated entries
- Responsive layout for mobile and desktop
- Zero external UI dependencies — pure CSS animations

## Tech Stack

- React 18 + Vite
- Press Start 2P (pixel font) + Share Tech Mono
- CSS custom properties and keyframe animations

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/` — ready to deploy on GitHub Pages, Netlify or Vercel.

## Structure

```
src/
├── components/
│   ├── Hero.jsx        # Terminal window with typing effect
│   ├── About.jsx       # Professional profile
│   ├── Skills.jsx      # Tech stack grid
│   ├── Timeline.jsx    # Experience timeline
│   └── Education.jsx   # Education cards
├── App.jsx
├── App.css             # All component styles
└── index.css           # Global styles, variables, animations
```
