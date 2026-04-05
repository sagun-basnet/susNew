import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
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

      {currentUser ? (
        <button
          onClick={() => logout()}
          className="p-2 px-4 rounded-md bg-red-500"
        >
          Logout
        </button>
      ) : (
        <div className="flex">
          <Link to={"/login"}>
            <button className="p-2 px-4 rounded-md bg-blue-500">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="p-2 px-4 rounded-md bg-red-500">Register</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
