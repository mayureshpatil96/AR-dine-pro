import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, total, clearCart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Qty: {item.qty}</p>
                <p>₹{item.price * item.qty}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            <div className="space-x-4">
              <button onClick={clearCart} className="bg-gray-400 text-white px-4 py-2 rounded-lg">
                Clear
              </button>
              <button
                onClick={() => alert("✅ Order Placed Successfully!")}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
