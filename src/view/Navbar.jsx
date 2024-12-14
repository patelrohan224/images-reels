import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const hideFooter = location?.pathname?.includes("/looks");

  return (
    !hideFooter && (
      <nav className="flex items-center justify-between p-3">
        <div className="flex items-center">Fashion</div>

        <div className="flex items-center">
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l3 9h10l3-9h2M9 13h6m-9 4h12"
              />
            </svg>
          </button>
        </div>
      </nav>
    )
  );
};

export default Navbar;
