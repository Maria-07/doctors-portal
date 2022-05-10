import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/about"}>Appointment</Link>
      </li>
      <li>
        <Link to={"/about"}>Reviews</Link>
      </li>
      <li>
        <Link to={"/about"}>Contact Us</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div class="navbar bg-base-100">
        <a href="/" class="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </a>
        <div class="navbar-end">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
            >
              {menuItems}
            </ul>
          </div>
        </div>

        {/* full display  */}

        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-lg">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
