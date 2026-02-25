import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {removeItemfromCart,IncreaseItemquantity,ItemsQuantitytoDecrease,clearCart} from './cartslice.jsx';

const ShoppingCart = () => {
  const dispatch=useDispatch();
  const cartItems=useSelector(state=>state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleRemoveItem = itemId => {
    dispatch(removeItemfromCart(itemId));
  }
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  const handleIncreaseQuantity=(itemId)=>{
    dispatch(IncreaseItemquantity(itemId));
  }
  const handleDecreaseQuantity=(itemId)=>{
    dispatch(ItemsQuantitytoDecrease(itemId));
  }  
  return (
    <>
     <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                {item.image && (
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                )}
                <span>{item.name} - ${item.price}</span>
              </div>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove ✖</button>
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
      {totalAmount > 0 && (
        <div className="total-amount">Total: ${totalAmount.toFixed(2)}</div>
      )}
    </>
  )
}

export default ShoppingCart;