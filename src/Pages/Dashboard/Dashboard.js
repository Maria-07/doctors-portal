import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
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
            {admin && (
              <>
                <li>
                  <Link
                    className=" text-lg font-medium text-secondary"
                    to={"/dashboard/users"}
                  >
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-lg font-medium text-secondary"
                    to={"/dashboard/addDoctor"}
                  >
                    Add a doctor
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-lg font-medium text-secondary"
                    to={"/dashboard/manageDoctor"}
                  >
                    Manage Doctor
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
