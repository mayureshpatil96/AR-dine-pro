import { useState } from "react";
import Dish3DViewer from "../components/Dish3DViewer";

const dishes = [
  { id: 1, name: "Palak Paneer", price: 180, modelUrl: "/models/palak_paneer.glb" },
  { id: 2, name: "palak_paneer", price: 200, modelUrl: "/models/palak_paneer.glb" },
  { id: 3, name: "tandoori_mix_grill", price: 250, modelUrl: "/models/tandoori_mix_grill.glb" },
  { id: 4, name: "chole_bhature", price: 150, modelUrl: "/models/chole_bhature.glb" },
  { id: 5, name: "chicken_biryani", price: 120, modelUrl: "/models/chicken_biryani.glb" },
];

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
        >
          <img
            src={`https://via.placeholder.com/200x150?text=${dish.name}`}
            alt={dish.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{dish.name}</h3>
            <p className="text-gray-600 mb-2">₹{dish.price}</p>
            <button
              onClick={() => setSelectedDish(dish)}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              View in 3D
            </button>
          </div>
        </div>
      ))}

      {selectedDish && (
        <Dish3DViewer
          modelUrl={selectedDish.modelUrl}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </div>
  );
}
