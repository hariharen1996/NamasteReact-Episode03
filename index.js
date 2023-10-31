import React from "react";
import ReactDom from "react-dom";
//Create a Header Component from scratch using Functional components in jsx
// 1. add logo on left
// 2. add a search bar in middle
// 3. add user icon on right
// 4. add css to make it nice

const HeaderComponent = () => {
  return (
    <div className="container">
      <img
        src="https://namastedev.com/images/reel.png"
        className="img"
        alt="logo"
      />
      <input
        type="search"
        className="search-input"
        placeholder="search here.."
      />
      <img
        src="https://namastedev.com/images/reel.png"
        alt="icon"
        className="img"
      />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
