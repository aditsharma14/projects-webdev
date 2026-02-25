import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemtoCart } from './cartslice'; // Action to add product to cart

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally

  const products = [
    { id: 1, name: 'Product A', price: 60, image: 'https://via.placeholder.com/80?text=A' },
    { id: 2, name: 'Product B', price: 75, image: 'https://via.placeholder.com/80?text=B' },
    { id: 3, name: 'Product C', price: 30, image: 'https://via.placeholder.com/80?text=C' },
  ];

  const handleAddToCart = product => {
    dispatch(addItemtoCart(product));// Add product to cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
            <li key={product.id} className="product-list-item">
              <div className="product-info">
                <img src={product.image} alt={product.name} className="product-image" />
                <span>{product.name} - ${product.price}</span>
              </div>
              <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)} // Disable if already in cart
              >
                {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
              </button>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default ProductList;