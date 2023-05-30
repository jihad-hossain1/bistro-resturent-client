import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingBasket,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaHamburger,
  FaFrownOpen,
  FaUtensils,
} from "react-icons/fa";
import useCart from "../Hook/useCart";

const Dashbord = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
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
          <ul className="menu p-4 w-80 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashbord">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingBasket></FaShoppingBasket> MyCart
                    <span className="btn btn-warning btn-xs ">
                      {cart.length || 0}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage">
                    <FaWallet></FaWallet> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additem">
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUtensils></FaUtensils> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashbord">
                    <FaHome></FaHome> Users Home
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingBasket></FaShoppingBasket> MyCart
                    <span className="btn btn-warning btn-xs ">
                      {cart.length || 0}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaHamburger></FaHamburger> Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/myorder">
                <FaFrownOpen></FaFrownOpen> Our Food
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
