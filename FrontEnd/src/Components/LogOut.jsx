import { useEffect } from "react";
import axiosInstance from "../utilis/axiosInstance";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      Navigate("/login");
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  useEffect(() => {
    handleLogout();
  });

  return (
    <button
      onClick={handleLogout}
      className="bg-green-300 text-black p-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogOut;
