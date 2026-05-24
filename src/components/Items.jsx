import React from "react";
import { Link } from "react-router-dom";

export default function Items() {
  return (
    <div className="p-4 m-4 flex gap-4 justify-center text-2xl text-red-600">
      <Link
        to="/"
        className="relative after:absolute after:bottom-0 
        after:left-0 after:w-0 after:h-0.5 after:bg-red-500 
        after:transition-all after:duration-500 hover:after:w-full"
      >
        Home |
      </Link>
      <Link
        to="/burger"
        className="relative after:absolute after:bottom-0 
        after:left-0 after:w-0 after:h-0.5 after:bg-red-500 
        after:transition-all after:duration-500 hover:after:w-full"
      >
        Burger |
      </Link>
      <Link
        to="/pizza"
        className="relative after:absolute after:bottom-0 
        after:left-0 after:w-0 after:h-0.5 after:bg-red-500 
        after:transition-all after:duration-500 hover:after:w-full"
      >
        Pizza |
      </Link>
      <Link
        to="/pasta"
        className="relative after:absolute after:bottom-0 
        after:left-0 after:w-0 after:h-0.5 after:bg-red-500 
        after:transition-all after:duration-500 hover:after:w-full"
      >
        Pasta
      </Link>
    </div>
  );
}