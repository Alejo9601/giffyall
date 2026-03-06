# Giffyall

A learning project built with React + Create React App.

Giffyall is a small GIF browser that uses the GIPHY API to:
- show trending GIF searches,
- search GIFs by term,
- render GIF cards,
- navigate to a GIF detail view,
- simulate a basic login state in session storage.

## Tech Stack
- React 18
- React Router DOM 6
- styled-components
- Create React App (react-scripts 5)

## Project Goals
This repository is intentionally kept as a learning project.
The focus is understanding React fundamentals (components, hooks, context, routing, async fetches), not production hardening.

## Getting Started

### Prerequisites
- Node.js 18+ (Node 20 works)
- npm 8+

### Install
```bash
npm install
```

### Run in development
```bash
npm start
```
The app runs at `http://localhost:3000`.

If port 3000 is already in use:
- stop the previous process using that port, or
- run on another port:
```powershell
$env:PORT=3001; npm start
```

### Build
```bash
npm run build
```

### Test
```bash
npm test
```

## App Routes
- `/` -> Home
- `/home` -> Home
- `/login` -> Login page
- `/signup` -> Sign-up form UI
- `/search/:term` -> Search results page
- `/detail/:gifId` -> GIF detail page

## Main Folders
- `src/components` -> UI building blocks (Gif, Header, Loader, etc.)
- `src/pages` -> page-level route components
- `src/hooks` -> custom hooks (`useGifs`, `useSingleGif`, `useTrendingSearches`, etc.)
- `src/services` -> API/service functions
- `src/context` -> global state with React Context
- `src/layouts` -> reusable page layouts

## Data Sources
GIPHY public endpoints are used directly from the frontend (API key currently hardcoded in service files):
- Trending searches
- GIF search
- Trending GIFs

## Authentication (Learning Stub)
Login is mocked in `src/services/userServices.js`.
It returns a static user/token and stores the username in `sessionStorage`.
No real backend auth is implemented.

## Known Limitations
These are expected for this learning version:
- Error handling around API failures is minimal.
- Some React Hook dependency warnings are present.
- Detail view depends on GIFs already loaded in context.
- Sign-up page is currently UI-only.

## Notes for Future Improvements
If you later want to evolve this project:
- move API key to environment variables (`.env`),
- add robust loading/error/empty states,
- add tests for hooks and routes,
- improve detail fetching by requesting GIF by id when needed,
- add a real auth backend.

## Available Scripts (CRA)
- `npm start` -> starts the dev server
- `npm run build` -> creates production build in `build/`
- `npm test` -> runs tests
- `npm run eject` -> ejects CRA config (one-way)
