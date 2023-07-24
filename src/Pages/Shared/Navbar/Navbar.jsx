// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOption = (
    <>
      <li className="text-black font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/">Home</Link>
      </li>
      <li className="text-black font-bold  bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/colleges">Colleges</Link>
      </li>
      <li className="text-black font-bold  bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/admission">Admission</Link>
      </li>
      <li className="text-black font-bold  bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/myCollege">My College</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case md:text-xl lg:text-xl  bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
          End-Game
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn btn-active btn-ghost btn-sm">
              Log Out
            </button>
            <div className="avatar">
              <Link to="/profile">
                <label
                  data-tip={user?.displayName}
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-left">
                  <div className="md:w-10 lg:w-10 w-8 ms-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-active btn-ghost btn-sm">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
