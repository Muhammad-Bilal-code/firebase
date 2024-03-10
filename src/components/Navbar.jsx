import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  // console.log(navigate);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);

  const logout = () => {
    console.log("Logout");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md"
    >
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          Test
        </div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-white justify-center items-center">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          {user && <li>{user.user.email}</li>}
          {user && (
            <li className="cursor-pointer" onClick={logout}>
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
