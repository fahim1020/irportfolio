import { useEffect } from "react";
import { CpanelSideBar } from "../components/cpanel/CpanelSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export const CPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/check-login`, {
          withCredentials: true,
        });
        if (res.status !== 200) {
          navigate("/cpanel/login");
        }
      } catch (error) {
        // console.error(error);
        navigate("/cpanel/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
      <CpanelSideBar />
    </>
  );
};
