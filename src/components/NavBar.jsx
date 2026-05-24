import React, { useState } from "react";
import logo from '../assets/plateful-logo.svg'

export default function NavBar({ search, setSearch }) {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }
  return (
    <header>
      <nav className="bg-stone-600 p-4 text-white relative">
        <div className="flex justify-center gap-4 md:justify-between items-center">
          <div className="logo">
            <img
              src={logo}
              alt="plateful_logo"
              className="h-12 width-100"
            />
          </div>

          <div className="search text-white border ">
            <input
              type="search"
              placeholder="Search..."
              className="text-white w-full px-4 py-2 text-black outline-none md:w-64 md:ml-4"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ul
            className={`${open ? "flex" : "hidden"} flex-col items-center absolute top-full left-0 w-full bg-gray-200 text-black p-4 md:flex md:flex-row md:static md:w-auto md:p-0 md:bg-transparent md:text-white md:gap-4`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

          <button className="text-black md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}