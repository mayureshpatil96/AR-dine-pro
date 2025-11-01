import React from "react";
import "@google/model-viewer";

const ModelViewer = ({ modelPath }) => {
  return (
    <model-viewer
      src={modelPath}
      alt="3D model"
      auto-rotate
      camera-controls
      shadow-intensity="1"
      style={{
        width: "400px",
        height: "400px",
      }}
    ></model-viewer>
  );
};

export default ModelViewer;
