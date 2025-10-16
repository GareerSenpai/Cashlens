import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex-1 flex h-full">
      <div className="w-[60%] flex justify-center items-center h-full">
        <Outlet />
      </div>
      <div className="w-[40%]">Image</div>
    </div>
  );
};

export default AuthLayout;
