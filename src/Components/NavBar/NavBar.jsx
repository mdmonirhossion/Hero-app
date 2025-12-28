import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

// Combined data for easier management
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Apps", path: "/apps" },
  { name: "Installation", path: "/installed" },
];

const NavBar = () => {
  // Common class for active/inactive links to keep JSX clean
  const getLinkClasses = ({ isActive }) =>
    isActive
      ? "bg-violet-50 text-violet-700 font-bold px-4 py-2 rounded-lg transition-all"
      : "text-slate-600 hover:text-violet-600 hover:bg-slate-50 font-medium px-4 py-2 rounded-lg transition-all";

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="navbar container mx-auto px-4 lg:px-8 py-2">
          
          {/* --- Navbar Start: Mobile Menu & Logo --- */}
          <div className="navbar-start gap-2">
            
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-slate-600 hover:bg-slate-100"
                aria-label="Open Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-3 w-52 p-3 shadow-xl border border-slate-100"
              >
                {navLinks.map((item, index) => (
                  <li key={index} className="mb-1">
                    <NavLink to={item.path} className={getLinkClasses}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="../logo.png"
                  alt="HERO.IO Logo"
                  className="relative w-9 h-9 object-contain"
                />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                HERO.IO
              </span>
            </Link>
          </div>

          {/* --- Navbar Center: Desktop Menu --- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path} className={getLinkClasses}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Navbar End: Contribute Button --- */}
          <div className="navbar-end">
            <Link
              to="https://github.com/mdmonirhossion"
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-auto min-h-0 py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white border-none rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <FaGithub className="text-lg" />
              <span className="hidden md:inline font-semibold text-sm">Contribute</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;