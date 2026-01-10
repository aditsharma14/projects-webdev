# TodoList

A small, responsive React Todo List app built with Vite. Create headings (projects), add items under each heading, and remove headings. Designed as a lightweight demo and starting point for learning React state management and component structure.

## Features

- Create multiple headings (todo groups)
- Add items to each heading
- Remove headings
- Responsive, modern UI with clean styles

## Tech

- React
- Vite
- CSS (custom)

## Project structure

- `index.html` — app entry
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main app shell
- `src/assets/todo.jsx` — TodoList component (core logic)
- `src/assets/style.css` — styles for the todo UI

## Setup & Run

1. Install dependencies:

```bash
cd todolist
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Usage

- Type a heading name in the top input and click **Add Heading**.
- Inside a heading card, type an item and click **Add List** to add it.
- Click **Delete Heading** to remove a heading and its items.

## Notes & Next steps

- This project stores state in memory; add persistence (localStorage or backend) to keep todos between reloads.
- Consider extracting `TodoItem` and `TodoCard` subcomponents for clarity and testability.

## License

This repository has no license specified. Add one if you plan to share or publish the code.
