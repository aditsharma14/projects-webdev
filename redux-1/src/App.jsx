import React from 'react';
import ProductList from './assets/product.jsx';
import ShoppingCart from './assets/ShoppingCart.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
        <h1 className="site-title">🛒 Chromatic Cart</h1>
      </header>
      <main className="main-content">
        <ProductList />
        <ShoppingCart />
      </main>
      <footer className="site-footer">
        <p>© 2026 Chromatic Cart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
