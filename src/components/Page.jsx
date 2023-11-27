import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
function Page() {
  const navigate = useNavigate();
  const gadamisamarteba = () => {
    navigate("/Authorization");
  };
  const handleNext = () => {
    navigate("Next ");
  };
  return (
    <Fragment>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <button style={{
          padding: "10px 20px", fontSize: "16px", backgroundColor: " #167bff", color: "white", borderRadius: "10px", marginRight: "10px", cursor: "pointer",
          transition: "background-color 0.3s ease-in-out"
        }} onClick={gadamisamarteba}>Sign up</button>
        <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: " #167bff", color: "white", borderRadius: "10px" }} onClick={handleNext}>Login</button>
      </div>
    </Fragment>
  );
}
export default Page;
