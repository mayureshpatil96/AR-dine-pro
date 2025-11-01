import React, { useState } from "react";
import menuData from "../data/menuData";
import ModelViewer from "../components/ModelViewer";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(menuData[0]);
  const { addToCart } = useCart();

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{selectedDish.name}</h2>
        <ModelViewer modelPath={selectedDish.model} />
        <button
          onClick={() => addToCart(selectedDish)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {menuData.map((dish) => (
          <div
            key={dish.id}
            onClick={() => setSelectedDish(dish)}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:scale-105 transition"
          >
            <img src={dish.image} alt={dish.name} className="rounded-lg mb-2 w-full h-40 object-cover" />
            <h3 className="font-semibold">{dish.name}</h3>
            <p className="text-gray-500">₹{dish.price}</p>
            <p className="text-yellow-500">⭐ {dish.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
