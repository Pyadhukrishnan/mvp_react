import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./themes/components/Navbar/Navbar";
import ButtonComponent from "./themes/components/ButtonComponent/ButtonComponent";

const Layout = ({ children }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const [pathName,setPathName] = useState("")
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);


  const handleRegistrationRoute = () => {
    navigate("/register-user")
  }

  const handleLoginRoute = () => {
    navigate("/login");
  }

  const getAdditionalContents = () => {
    if (pathName === "/login") {
      return <ButtonComponent buttonSize="small" content={"新規登録"} onClick={handleRegistrationRoute}/>;
    } else if (pathName === "/register-user") {
      return <ButtonComponent buttonSize="small" content={"ログイン"} onClick={handleLoginRoute}/>;
    } else if (pathName.startsWith("/profile")) {
      return <p>Profile Details</p>;
    }
    return null;
  };

  return (
    <>
      <Navbar additionalContents={getAdditionalContents()} />
      {children}
    </>
  );
};

export default Layout;
