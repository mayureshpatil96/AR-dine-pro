import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function FoodModel({ modelUrl }) {
    const { scene } = useGLTF(modelUrl);
  
    // Optional fine-tuning 👇
    scene.position.set(0, 1, 0); // move model up/down
    scene.rotation.set(0, Math.PI / 2, 0); // rotate model if needed
  
    return (
      <primitive
        object={scene}
        scale={7} // ⬅️ increase or decrease this to resize
      />
    );
  }
  

export default function Dish3DViewer({ modelUrl, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="relative w-[80vw] h-[80vh] bg-white rounded-xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md"
        >
          ✕
        </button>

        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Environment preset="sunset" />
          <FoodModel modelUrl={modelUrl} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
