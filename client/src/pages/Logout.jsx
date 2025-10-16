// src/pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_URLS } from "@/constants/URLs/backendServices";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post(AUTH_URLS.logout, {}, { withCredentials: true });
      } catch (err) {
        console.error("Logout failed:", err);
      } finally {
        // Always navigate to login
        navigate("/login");
      }
    };

    logoutUser();
  }, [navigate]);
};

export default Logout;
