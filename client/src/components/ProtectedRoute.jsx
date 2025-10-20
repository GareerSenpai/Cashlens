import { USER_URLS } from "@/constants/URLs/backendServices";
import { useAuth } from "@/contexts/AuthProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { token, setToken } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(USER_URLS.userDetails, {
          withCredentials: true,
        });

        if (res.status !== 200) {
          setToken(null);
        }
      } catch (error) {
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
