import React from "react";
import useMousePosition from "./cursor";
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  
  return (
   
      <svg
        width={80}
        height={80}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle
          cx="35"
          cy="35"
          r="6"
          stroke="white"
          fill="none"
        />
      </svg>
  );
};
export default Cursor