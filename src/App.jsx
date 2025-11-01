import React from "react";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🍔 AR Dine Pro – 3D Menu</h1>

      {/* Example model */}
      <ModelViewer src="/models/chole_bhature.glb" alt="3D Burger" height="500px" />
      <ModelViewer src="/models/palak_paneer.glb" alt="3D Burger" height="500px" />
      <ModelViewer src="/models/tandoori_aloo_paratha.glb" alt="3D Burger" height="500px" />
      <ModelViewer src="/models/tandoori_mix_grill.glb" alt="3D Burger" height="500px" />
    </div>
  );
}

export default App;
