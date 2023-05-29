import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingBasket,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaHamburger,
} from "react-icons/fa";

const Dashbord = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link>
                <FaHome></FaHome> User Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/mycart">
                <FaShoppingBasket></FaShoppingBasket> MyCart
              </Link>
            </li>
            <li>
              <Link>
                <FaWallet></FaWallet> Payment History
              </Link>
            </li>
            <li>
              <Link>
                <FaCalendarAlt></FaCalendarAlt> Reservations
              </Link>
            </li>

            <div className="divider"></div>
            <li>
              <Link>
                <FaHome></FaHome> Home
              </Link>
            </li>
            <li>
              <Link>
                <FaHamburger></FaHamburger> Home
              </Link>
            </li>
            <li>
              <Link>
                <FaHome></FaHome> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
