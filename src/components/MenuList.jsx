import React from "react";
import MenuItemCard from "./MenuItemCard";

const MenuList = ({ menu, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {menu.map((item) => (
        <MenuItemCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default MenuList;
