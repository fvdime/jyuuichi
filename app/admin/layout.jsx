import AdminSidebar from "@/components/AdminSidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <AdminSidebar />
      {children}
    </div>
  );
};

export default Layout;
