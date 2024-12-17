import React from "react";


const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-gradient-to-tr from-blue-500 to-blue-800 py-4 px-8 flex justify-between items-center shadow fixed top-0 w-full text-white">
      <div className="flex items-center gap-2 px-4 py-2 rounded-sm shadow-lg bg-slate-100">
        <img
          src={window.location.origin + "/public/game.png"}
          className="h-8 w-8 inline"
        />
        <h1 className="text-2xl text-blue-600 font-semibold"> Fake Store</h1>
      </div>
      <button
        className="bg-[#ffffff40] px-4 py-2 font-medium rounded"
        onClick={onCartClick}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
