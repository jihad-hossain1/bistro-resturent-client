import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../../../Hook/useCart";

const Navbar = () => {
  const { user, singOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    singOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="hover:text-primary hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "default"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {/* <li className="hover:text-primary hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "default"
          }
          to=""
        >
          Contact Us
        </NavLink>
      </li> */}
      {/* <li className="hover:text-primary hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "default"
          }
          to=""
        >
          Dashboard
        </NavLink>
      </li> */}
      <li className="hover:text-primary hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "default"
          }
          to="/menu"
        >
          Menu
        </NavLink>
      </li>
      <li className="hover:text-primary hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "default"
          }
          to="/order/salad"
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="flex items-center gap-2">
            <FaCartArrowDown className="text-xl"></FaCartArrowDown>
            <div className="badge">+{cart.length || 0}</div>
            {/* <div className="badge">+0</div> */}
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <img
            className="w-6 md:w-8"
            title={user?.displayName}
            src={user?.photoURL}
            alt=""
          />
          <li
            onClick={handleLogOut}
            className="hover:text-primary hover:font-semibold"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-secondary" : "default"
              }
            >
              LogOut
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="hover:text-primary hover:font-semibold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-secondary" : "default"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </>
      )}
      {/* <li className="hover:text-primary hover:font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "default")}
          to=""
        >
          LogIn
        </NavLink>
      </li> */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-white text-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
              {/* <li className="hover:font-semibold hover:text-primary">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "default"
                    }
                    to="allToy"
                  >
                    All Toy
                  </NavLink>
                </li>
                {user && (
                  <li className=" hover:font-semibold hover:text-primary">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : "default"
                      }
                      to="myToy"
                    >
                      My Toy
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li className=" hover:font-semibold hover:text-primary">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : "default"
                      }
                      to="addToy"
                    >
                      Add A Toy
                    </NavLink>
                  </li>
                )}

                <li className=" hover:font-semibold">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "default"
                    }
                    to="blog"
                  >
                    Blog
                  </NavLink>
                </li> */}
            </ul>
          </div>
          <div className="flex items-center">
            <img src="" className="w-10" alt="" />
            <NavLink to="/" className="text-xl ml-2">
              Bistro{" "}
              <span className="font-semibold hover:text-primary">
                Resturant
              </span>
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-10">
            {navOptions}

            {/* <li className=" hover:font-semibold hover:text-primary">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "default"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li> */}
            {/* <li className=" hover:font-semibold hover:text-primary">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "default"
                  }
                  to="allToy"
                >
                  All Toy
                </NavLink>
              </li>
              {user && (
                <li className="hover:font-semibold hover:text-primary">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "default"
                    }
                    to="myToy"
                  >
                    My Toy
                  </NavLink>
                </li>
              )}
              {user && (
                <li className="hover:font-semibold hover:text-primary">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "default"
                    }
                    to="addToy"
                  >
                    Add A Toy
                  </NavLink>
                </li>
              )} */}
            {/* <li className="  hover:font-semibold hover:text-primary">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "default"
                  }
                  to="blog"
                >
                  Blog
                </NavLink>
              </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {/* {user ? (
              <div className="flex items-center space-x-2">
                <FaUserAlt
                  title={user.email.slice(0, 5)}
                  className="text-lg"
                ></FaUserAlt>
                <img
                  className="w-10"
                  title={user?.displayName}
                  src={
                    user ? (
                      <>{user?.photoURL}</>
                    ) : (
                      <>
                        <p>Icon</p>
                      </>
                    )
                  }
                  alt=""
                />
                <span onClick={handleLogOut} className="ml-2 cursor-pointer">
                  LogOut
                </span>
              </div>
            ) : (
              <Link
                className="hover:text-primary hover:font-semibold"
                to="/login"
              >
                LogIn
              </Link>
            )} */}

          <NavLink>Contact</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
