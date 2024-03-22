import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { myContext } from "../context/context";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // let context = useContext(myContext);
  // const { loggedInUser } = context;

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
