# UseFetch Project

A tiny React demo showing a reusable `useFetch` custom hook that fetches JSON data and renders it as a responsive, card-style list.

## Features

- Minimal `useFetch` hook with dependency-safe `useEffect`.
- Responsive card grid UI with modern styling.
- Small and easy-to-follow codebase for learning or copying into other projects.

## Quick Start

Requirements: Node.js (16+ recommended) and npm.

1. Install dependencies

```bash
cd UseFetch-project
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open the URL shown by the dev server (usually `http://localhost:5173`) to view the app.

## Project Structure

- `src/App.jsx` — root component that mounts `FetchData`.
- `src/assets/usefetch.jsx` — the custom hook. Returns the fetched data array.
- `src/assets/Fetchdata.jsx` — component that uses the hook and renders the list.
- `src/assets/style.css` — polished styles for the demo.

## Notes & Tips

- The hook accepts any JSON endpoint that returns an array of objects.
- It currently handles errors by returning an empty array; expand with loading and error states as needed.
- Rename or adapt the hook for pagination, aborting fetches, or caching.

## License

This project is provided for learning purposes. Use freely in personal and educational projects.
