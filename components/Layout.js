"use client";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className='h-screen flex flex-row justify-start'>
      <Sidebar />
      <div className='bg-[#eaeaea] flex-1 p-4 text-black'>{children}</div>
    </div>
  );
};

export default Layout;
