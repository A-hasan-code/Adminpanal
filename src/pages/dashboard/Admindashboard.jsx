import React, { useState } from "react";
import AdminHeader from "../../components/layout/Header";
import AdminSidebar from "../../components/layout/Sidebar";
import Dashboard from "./Dashboard";

const Admindashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeSidebarItem = 1; // Example: active on Dashboard

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
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
