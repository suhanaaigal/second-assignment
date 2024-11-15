// import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';
import "./Cart.css";

function Cart({ cart, removeFromCart, placeOrder }) {
  // Function to display notifications
  const notify = (message) => toast(message);

  // Handle removing an item from the cart
  const handleRemove = (id) => {
    if (removeFromCart && typeof removeFromCart === "function") {
      removeFromCart(id);
      notify("Item removed from cart!");
    } else {
      console.error("removeFromCart function is not provided or is invalid.");
    }
  };

  // Handle placing an order
  const handlePlaceOrder = () => {
    if (placeOrder && typeof placeOrder === "function") {
      placeOrder();
      notify("Order placed successfully!");
    } else {
      console.error("placeOrder function is not provided or is invalid.");
    }
  };

  // Ensure cart is a valid array
  if (!Array.isArray(cart)) {
    console.error("Invalid cart data. Expected an array, received:", cart);
    return <p>Error: Cart data is invalid.</p>;
  }

  return (
    <section id="cart" className="cart">
      <ToastContainer />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((cake) => (
            <li key={cake.id} className="cart-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/${cake.img}`}
                alt={cake.name || "Unnamed Cake"}
                className="cart-item-image"
                onError={(e) => {
                  console.error(`Image not found: ${e.target.src}`);
                  e.target.src = `${process.env.PUBLIC_URL}/images/default-cake.jpg`; // Fallback image
                }}
              />
              <div className="cart-item-details">
                <span>{cake.name || "Unnamed Cake"}</span>
                <span>
                  {cake.price || "0"} x {cake.quantity || "1"}
                </span>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(cake.id)}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={handlePlaceOrder} className="order-btn">
          Place Order
        </button>
      )}
    </section>
  );
}

export default Cart;
