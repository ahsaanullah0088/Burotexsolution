import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-2">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Bigger Logo */}
        <img src={logo} alt="Logo" className="h-12 md:h-15" />

        {user ? (
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dashboard Link */}
            <Link
              to="/dashboard"
              className="text-sm md:text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </Link>

            {/* Bigger UserButton */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 mt-3">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-full h-full",
                  },
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm md:text-base hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
