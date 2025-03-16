import React, { useState } from "react";
import { Link } from "react-router";

function ToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-4 text-end">
      <button onClick={toggleMenu} className="px-4 py-2  text-white rounded lg:hidden">
        <img src="/imges/menu.webp" alt="" />
      </button>
      {isMenuOpen && (
        <div className=" mt-2 text-start bg-white rounded-lg lg:hidden absolute right-1 p-3">
          <ul>
            <li className="py-4">
              <Link to="/">Jewelry & Accessories</Link>
            </li>
            <li className="py-4">
              <Link to="/">Clothing & Shoes</Link>
            </li>
            <li className="py-4">
              <Link to="/">Home & Living</Link>
            </li>
            <li className="py-4">
              <Link to="/">Wedding & Party</Link>
            </li>
            <li className="py-4">
              <Link to="/">Toys & Entertainment</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="hidden  lg:flex justify-center items-center mt-2">
        <ul className="flex">
          <li>
            <Link className="lg:px-2" to="/">
              Jewelry & Accessories
            </Link>
          </li>
          <li>
            <Link className="lg:px-2" to="/">
              Clothing & Shoes
            </Link>
          </li>
          <li>
            <Link className="lg:px-2" to="/">
              Home & Living
            </Link>
          </li>
          <li>
            <Link className="lg:px-2" to="/">
              Wedding & Party
            </Link>
          </li>
          <li>
            <Link className="lg:px-2" to="/">
              Toys & Entertainment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToggleMenu;
