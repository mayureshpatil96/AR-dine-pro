import React from "react";

// Import the model-viewer script
import "@google/model-viewer";

const ModelViewer = ({ src, alt, ar = true, autoRotate = true, cameraControls = true, width = "100%", height = "400px" }) => {
  return (
    <model-viewer
      src={src}
      alt={alt}
      ar={ar}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      style={{
        width: width,
        height: height,
        backgroundColor: "transparent",
      }}
    ></model-viewer>
  );
};

export default ModelViewer;
