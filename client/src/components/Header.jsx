import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-8 py-4 flex items-center bg-white">
      <style>{`
      .gradient-text {
          background: linear-gradient(135deg, #1a1a1a, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }`}</style>
      <Link to="/" className="text-3xl font-bold gradient-text">
        Cash Lens
      </Link>
    </div>
  );
};

export default Header;
