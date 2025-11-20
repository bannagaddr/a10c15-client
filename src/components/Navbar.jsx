import React, { useState, useContext } from "react";
import "../index.css";
import { Link, NavLink } from "react-router";
import { TbLeaf, TbMenu, TbX } from "react-icons/tb";
import { AuthContext } from "../datacontrols/contexts/Context";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = !!user;

  // logout user
  const handleLogout = () => {
    logout()
      .then(() => {
        // console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  // mobile menu icon toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // after user validation links
  const commonLinks = [
    { name: "Home", path: "/" },
    { name: "All Crops", path: "/all_crop_post" },
  ];

  // when use is logged in
  const privateLinks = [
    { name: "Profile", path: "/my-profile" },
    { name: "Add Crops", path: "/add-crop" },
    { name: "My Posts", path: "/my-post" },
    { name: "My Interests", path: "/my-interests" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 md:px-10 py-3 flex justify-between items-center relative">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <TbLeaf className="text-green-600 text-3xl" />
        KrishiLink
      </Link>

      {/* mobile menu icon toggling */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <TbX className="text-3xl" />
          ) : (
            <TbMenu className="text-3xl" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-2 p-4 md:hidden z-50">
          {commonLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMobileMenu}
              className="hover:text-green-600"
            >
              {link.name}
            </NavLink>
          ))}

          {isLoggedIn &&
            privateLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={toggleMobileMenu}
                className="hover:text-green-600"
              >
                {link.name}
              </NavLink>
            ))}

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="btn btn-outline btn-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/registration"
                onClick={toggleMobileMenu}
                className="btn btn-success btn-sm"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="btn btn-error btn-sm"
              >
                Logout
              </button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-600">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="hidden md:flex items-center gap-4">
        {commonLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="hover:text-green-600"
          >
            {link.name}
          </NavLink>
        ))}

        {isLoggedIn
          ? privateLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="hover:text-green-600"
              >
                {link.name}
              </NavLink>
            ))
          : null}

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-sm px-5 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Login
            </Link>
            <Link to="/registration" className="btn btn-success btn-sm">
              Register
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-600">
              <img
                src={user.photoURL || "https://i.pravatar.cc/150?img=3"}
                alt={user.displayName || "User"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
