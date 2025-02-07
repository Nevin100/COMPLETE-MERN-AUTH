import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance.jsx";
import Home from "../Pages/Home.jsx";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get("/api/auth/check-auth");
        if (response.data.authenticated) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null || false) {
    Navigate("/login");
  }

  return isAuth ? <Home /> : Navigate("/login");
};

export default ProtectedRoute;
