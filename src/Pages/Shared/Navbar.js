import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>

      <li>
        <Link to={"/about"}>Reviews</Link>
      </li>
      <li>
        <Link to={"/about"}>Contact</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to={"/appointment"}>Appointment</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </>
      )}

      {user ? (
        <li>
          <Link onClick={handleSignOut} to={"/login"}>
            <button className="btn btn-active btn-secondary text-white">
              LogOut
            </button>
          </Link>
        </li>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </a>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        {user && (
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Appointment
          </label>
        )}

        {/* full display  */}

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-lg">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
