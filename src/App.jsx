import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProtectedRoute from "./protected/ProtectedRoute";
import Todo from "./pages/Todo";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ContextProvider, { myContext } from "./context/context";
const App = () => {
  let context = useContext(myContext);
  // console.log(context);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/updateproduct"
          element={
            <ProtectedRoute>
              <UpdateProduct />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
};

export default App;
