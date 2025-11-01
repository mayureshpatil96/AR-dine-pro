import React from "react";

const MenuItemCard = ({ item, onSelect }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-4 cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={() => onSelect(item)}
    >
      <img
        src={item.image}
        alt={item.name}
        className="rounded-xl w-full h-40 object-cover mb-3"
      />
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{item.description}</p>
      <p className="font-bold text-yellow-600">₹{item.price}</p>
    </div>
  );
};

export default MenuItemCard;
