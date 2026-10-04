import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to extract numerical cost from cost string or number (e.g., "$15" or "15" -> 15)
  const parseCost = (cost) => {
    if (typeof cost === 'string') {
      return parseFloat(cost.replace('$', '')) || 0;
    }
    return Number(cost) || 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((totalCost, item) => {
      return totalCost + parseCost(item.cost) * item.quantity;
    }, 0);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    alert('Functionality to be added for future reference: Checkout Coming Soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      handleRemove(item);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <div className="cart-header-section">
        <h2>Your Shopping Cart</h2>
        <div className="total-cart-display">
          Total Cart Amount: <span>${calculateTotalAmount()}</span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your shopping cart is empty.</p>
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-items-wrapper">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <div className="cart-item-image-wrapper">
                <img className="cart-item-image" src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">
                  Unit Price: <strong>{typeof item.cost === 'string' && item.cost.startsWith('$') ? item.cost : `$${item.cost}`}</strong>
                </div>

                <div className="cart-item-quantity">
                  <span className="quantity-label">Quantity:</span>
                  <div className="quantity-controls">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="cart-item-quantity-value">
                      {item.quantity}
                    </span>
                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  Subtotal: <strong>${calculateTotalCost(item)}</strong>
                </div>

                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="cart-actions">
            <button
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="checkout-btn"
              onClick={handleCheckoutShopping}
            >
              Checkout (Coming Soon)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
