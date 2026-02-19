import React from 'react'
import './App.css'
import ShoppingCart from './assets/ShoppingCart';
import ProductList from './assets/product';
const App = () => {
  return (
    <div className="app-container">
      <ProductList/>
      <ShoppingCart/>
    </div>
  )
}

export default App
