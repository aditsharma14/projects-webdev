# Redux Shopping Cart Demo

This is a simple React application built with Vite that demonstrates using Redux Toolkit to manage a shopping cart. The project includes a product list component and a shopping cart component. You can add products to the cart, increase or decrease quantities, remove items, and clear the cart.

## 🛠️ Features

- Product list with add-to-cart buttons
- Cart with item quantity controls
- Total amount calculation
- State management using Redux Toolkit and React-Redux hooks
- Responsive, styled UI with hover effects and mobile support

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repo-url> redux-1
   cd redux-1
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   # or yarn install
   \`\`\`

### Running the App

Start the development server:

\`\`\`bash
npm run dev

# or yarn dev

\`\`\`

Open your browser at `http://localhost:5173` (or the port shown in the terminal).

## 📁 Project Structure

\`\`\`
src/
├─ assets/
│ ├─ cartslice.jsx # Redux slice for cart logic
│ ├─ ShoppingCart.jsx # Cart UI component
│ └─ product.jsx # Product list component
├─ App.jsx # Root component
├─ App.css # Styles
├─ index.css # Global styles (empty)
├─ main.jsx # React entry point
└─ store.js # Redux store configuration
\`\`\`

## 📦 Redux Setup

- `cartslice.jsx` defines reducers and actions for cart operations.
- `store.js` configures the Redux store with the cart reducer.
- `main.jsx` wraps the `<App />` inside a `<Provider>` passing the store.
- Components use `useDispatch` and `useSelector` hooks to interact with state.

## 🤝 Contributing

Feel free to fork the repo and submit pull requests. Suggestions and improvements are welcome!

## 📝 License

This project is open source and free to use.
