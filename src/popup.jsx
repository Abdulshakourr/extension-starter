import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Popup() {
  return (
    <div className="w-[20rem] p-4">
      <h1 className="text-blue-400 font-bold text-2xl">Popup Good morning</h1>
      <p>Hell this is simple test</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Popup />);
