import { Timestamp, addDoc, collection } from "firebase/firestore";
import { createContext, useState } from "react";
import React from "react";
import { db } from "../firebaseone/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export const myContext = createContext(null);

const ContextProvider = (props) => {
  let myName = "Bilal";
  // const [loggedInUser, setLoggedInUser] = useState(null);
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.user?.uid);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    imageUrl: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    uid: user?.user?.uid,
  });
  const handleAddProduct = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.category == "" ||
      product.imageUrl == ""
    ) {
      return alert("All Fields Required");
    }
    const dbRef = collection(db, "products");
    try {
      console.log(product);
      const doc = await addDoc(dbRef, product);
      console.log("Add", doc.id);
      alert("Addedd", doc.id);
      setProduct({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        uid: user.user.uid,
      });
      navigate("/products");
    } catch (error) {
      console.log(error);
      console.log(error.meesage);
    }
  };
  return (
    <myContext.Provider
      value={{
        product,
        setProduct,
        handleAddProduct,
        // user,
        // loggedInUser,
        // setLoggedInUser,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ContextProvider;
