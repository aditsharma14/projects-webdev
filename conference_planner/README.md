# Conference Expense Planner (React + Redux + Vite)

This is a simple yet interactive tool built with **React** and **Redux Toolkit**, bundled by **Vite**. It allows users to select venues, audio‑visual add‑ons, and meal options while showing real‑time cost calculations.

## Features

- Venue selection with quantity controls and capacity limits
- AV equipment and add‑on management with increment/decrement
- Meal choices with per‑person pricing and numeric input
- Redux store for state management with slices for venue, AV, and meals
- Dynamic total cost display and detailed breakdown
- Responsive layout and polished UI using custom CSS

## Getting Started

1. **Install dependencies**

   ```bash
   cd conference_planner
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view in the browser. Hot reloading is enabled.

3. **Build for production**

   ```bash
   npm run build
   ```

   The output will be placed in `dist/`.

4. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
conference_planner/
├─ public/           # static assets
├─ src/
│  ├─ assets/        # components, slices, CSS, images
│  │  ├─ conferenceplanner.jsx  # main component
│  │  ├─ venueslice.js
│  │  ├─ avslice.js
│  │  ├─ mealslice.js
│  │  ├─ store.js
│  │  ├─ conferenceplanner.css
│  │  ├─ totalcost.jsx / totalcost.css
│  │  └─ *.jpg/.png      # image assets
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
└─ vite.config.js
```

## Notes

- Images are imported in slices so that the bundler resolves them correctly.
- Styles live alongside components but can be refactored into modules if preferred.
- Feel free to extend slices with async thunks or persist the store to localStorage.

---

This README replaces the default template text with instructions and an overview specific to the Conference Planner application.
