import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"; // Import Link here
import xortslogic from "../../assets/667c787a9b7615b661cb892f_360.png"; // Your logo

const AdminHeader = ({ toggleSidebar }) => {
  const user = {
    avatar: {
      url: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    toggleSidebar(); // Toggle sidebar when the menu is opened
  };

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={xortslogic}
            alt="Logo"
            className="w-[50px] sm:w-[60px] md:w-[70px]"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
        {/* Hamburger Icon for mobile */}
        <button
          className="flex items-center lg:hidden"
          onClick={handleMobileMenuToggle}
        >
          <GiHamburgerMenu size={30} />
        </button>

        {/* User Avatar */}
        <div className="flex items-center">
          <img
            src={user.avatar.url}
            alt="User Avatar"
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
