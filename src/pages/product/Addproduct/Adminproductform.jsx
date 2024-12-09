import React, { useState } from "react";
import AdminHeader from "../../../components/layout/Header";
import AdminSidebar from "../../../components/layout/Sidebar";
import Addproduct from "./Addproduct";

const Adminproductform = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeSidebarItem = 4; // Example: active on Dashboard

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <AdminHeader toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <AdminSidebar
          active={activeSidebarItem}
          isSidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-hidden">
          <Addproduct />
        </div>
      </div>
    </div>
  );
};

export default Adminproductform;
