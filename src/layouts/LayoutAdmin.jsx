import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";


const LayoutAdmin = ({children}) => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll p-8">
        {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
