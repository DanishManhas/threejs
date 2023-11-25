import React from "react";
import { useSnapshot } from "valtio";

import state from "./../store";

function CustomButton({ type, title, CustomStyles, handleClick }) {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`px-2 py-1 flex-1 rounded-md ${CustomStyles}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
}

export default CustomButton;
