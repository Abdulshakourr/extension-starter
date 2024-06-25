import React, { useState } from "react";
import image from "../../public/images/icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-0 relative border-2 border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-[#263fcf]">
              <span className="sr-only">Home</span>
              <div className="flex flex-col items-center justify-center">
                <img className="w-10 h-10" src={image} alt="" />
                <span className="font-bold">ikeep</span>
              </div>
            </Link>
          </div>

          <div
            className={`bg-[#c2d4fb] absolute right-[-2px] top-[60px] transform transition-transform duration-700 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } h-screen w-24 z-50`}
          >
            <nav aria-label="Global">
              <ul className="flex items-center flex-col gap-6 py-8 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
