import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

//Componenent lifecylecl
//1. mount / initial render
//2. Re-render: this is an optional phase
//3. unmount

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}

    {/* <StarRating size={24} defaultRating={3} /> */}
  </React.StrictMode>
);
