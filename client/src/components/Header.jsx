import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 flex items-center bg-white">
      <Link to="/" className="text-2xl font-medium px-4">
        Cash Lens
      </Link>
    </div>
  );
};

export default Header;
