import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar z-30 fixed select-none lg:px-32 bg-white border-b-2 border-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn border-none lg:btn-md btn-sm btn-ghost bg-gradient-to-br from-bgPrimary to-bgSecondary shadow-xl hover:shadow-md hover:bg-gradient-to-tl px-1 lg:hidden"
          >
            <BiMenu className=" lg:text-3xl text-2xl" />
          </label>
          <div
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2  border-0 normal-case text-gray-700 bg-gray-200 shadow-xl hover:shadow-md rounded-xl w-52"
          >
            <NavItem to="/statistics" name="Statistics" />
            <NavItem to="/applied-job" name="Applied Jobs" />
            <NavItem to="/blogs" name="Blogs" />
          </div>
        </div>
        <Link to="/" className="flex items-center lg:gap-2 gap-1 ml-4 lg:ml-0">
          <img src={logo} alt="logo" className="lg:w-10 w-6" />
          <span className="lg:text-lg text-sm font-bold text-gray-700">
            Job Star
          </span>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="px-1 hidden lg:flex gap-10">
          <NavItem to="/statistics" name="Statistics" />
          <NavItem to="/applied-job" name="Applied Jobs" />
          <NavItem to="/blogs" name="Blogs" />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Navbar;
