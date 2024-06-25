import React from "react";
import Navbar from "./Navbar";
import { Link, Navigate } from "react-router-dom";

export default function Home() {
  const user = false;

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <Navbar />
      <Link to="/login">Login</Link>
    </>
  );
}
