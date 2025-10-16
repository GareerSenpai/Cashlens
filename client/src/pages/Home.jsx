import { Button } from "@/components/ui/button";
import { USER_URLS } from "@/constants/URLs/backendServices";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Button size="lg" className="p-8">
        <Link to="/dashboard" className="text-2xl">
          Dashboard
        </Link>
      </Button>
    </div>
  );
};

export default Home;
