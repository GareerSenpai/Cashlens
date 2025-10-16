import {
  HandCoins,
  LayoutDashboard,
  LogOut,
  WalletMinimal,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `rounded-[8px] p-3 px-6 flex gap-3 items-center transition-colors ${
      isActive ? "bg-[#7A52F2] text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="profile flex flex-col items-center gap-2">
        <div className="avatar rounded-full w-20 h-20 bg-red-500"></div>
        <div className="name font-semibold text-lg">John Doe</div>
      </div>
      <NavLink to="/dashboard" end className={linkClasses}>
        <LayoutDashboard /> Dashboard
      </NavLink>
      <NavLink to="/dashboard/income" className={linkClasses}>
        <WalletMinimal />
        Income
      </NavLink>
      <NavLink to="/dashboard/expense" className={linkClasses}>
        <HandCoins /> Expense
      </NavLink>
      <NavLink to="/logout" className={linkClasses}>
        <LogOut /> Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
