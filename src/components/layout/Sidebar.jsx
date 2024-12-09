import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";

const Sidebar = ({ active, isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } sm:block w-[80px] sm:w-[150px] md:w-[230px] lg:w-[230px] lg:h-[100vh] bg-white shadow-sm overflow-y-auto sticky top-0 left-0 z-10 transition-all`}
    >
      {/* Sidebar Items */}
      {[
        {
          to: "/",
          icon: <RxDashboard size={30} />,
          label: "Dashboard",
          id: 1,
        },
        {
          to: "/customer",
          icon: <RiCustomerServiceLine size={30} />,
          label: "All Customers",
          id: 2,
        },
        {
          to: "/sale",
          icon: <FiShoppingBag size={30} />,
          label: "Sales",
          id: 6,
        },

        {
          to: "/employeetable",
          icon: <HiOutlineUserGroup size={30} />,
          label: "All Employees",
          id: 3,
        },
        {
          to: "/product",
          icon: <BsHandbag size={30} />,
          label: "All Products",
          id: 4,
        },
        {
          to: "/profile",
          icon: <AiOutlineSetting size={30} />,
          label: "Settings",
          id: 5,
        },
      ].map((item) => (
        <div
          key={item.id}
          className={`flex items-center w-full p-4 hover:bg-gray-100 ${
            active === item.id ? "bg-gray-100" : ""
          }`}
        >
          <Link to={item.to} className="flex items-center w-full">
            <div
              className={`${
                active === item.id ? "text-crimson" : "text-[#1f1f1e]"
              }`}
            >
              {item.icon}
            </div>
            <h5
              className={`pl-2 text-[18px] font-[400] hidden sm:block ${
                active === item.id ? "text-crimson" : "text-[#1f1d1d]"
              }`}
            >
              {item.label}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
