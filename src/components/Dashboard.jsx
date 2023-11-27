import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const logout = () => {
    window.localStorage.removeItem("loggedin");
    window.localStorage.removeItem("email");
    window.location.href = "/login";
    navigate("/");
  }
  const navigate = useNavigate();
  useEffect(() => {
    const log = window.localStorage.getItem("loggedin");
    if (log == "true") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>მთავარი გვერდი </h1>
      <button type="button" onClick={logout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};
export default Dashboard;
