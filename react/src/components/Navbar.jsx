import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 flex items-center justify-between h-20 bg-amber-500">
      <h1 className="text-2xl font-bold">LOGO</h1>

      <ul className="flex gap-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/service"}>
          <li>Service</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>

      <div className="flex">
        <button className="p-2 px-4 rounded-md bg-blue-500">Login</button>
        <button className="p-2 px-4 rounded-md bg-red-500">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
