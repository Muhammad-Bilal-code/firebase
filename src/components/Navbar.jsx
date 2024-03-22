import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../context/context";

function Navbar() {
  const navigate = useNavigate();
  // console.log(navigate);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  // let context = useContext(myContext);
  // const { loggedInUser } = context;
  // console.log(loggedInUser);

  const logout = () => {
    console.log("Logout");
    // signOut(auth)
    //   .then(() => {
    //     // Sign-out successful.
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //   });
    localStorage.clear("user");
    navigate("/login");
  };
  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md"
    >
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          {user && <li>{user.user.email}</li>}
        </div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-white justify-center items-center">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/products"}>
            <li className="cursor-pointer">Products</li>
          </Link>

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
