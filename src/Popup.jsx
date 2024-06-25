import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

export default function Popup() {
  return (
    <>
      <div className="w-[30rem] h-[30rem] ">
        <RouterProvider router={router} />
        {/* <div className=" bg-orange-900">
          <h1>this is simple</h1>
        </div> */}
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Popup />);
