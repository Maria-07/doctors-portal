import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-10 ">
          {/* <!-- Page content here --> */}
          <h2 className=" text-3xl font-medium text-primary ">
            Welcome to your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 shadow-lg text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link
                className=" text-lg font-medium text-secondary"
                to={"/dashboard"}
              >
                My Appointments
              </Link>
            </li>
            <li>
              <Link
                className=" text-lg font-medium text-secondary"
                to={"/dashboard/review"}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
