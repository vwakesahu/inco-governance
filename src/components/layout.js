import React from "react";
import Sidebar from "./sidebar";

const LayoutD = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow h-screen">
        <div className="p-6 bg-gray-100 h-full">
          <div className="flex flex-col flex-grow bg-white h-full rounded-lg shadow-sm overflow-hidden">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutD;
