import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { db, auth } from "../../firebaseone/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
function ProductTable() {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const handleGetProducts = async () => {
    console.log("Get Products");

    try {
      const q = query(
        collection(db, "products"),
        where("uid", "==", user.user.uid)
      );
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      console.log(querySnapshot.docs);
      // console.log(querySnapshot.docs);
      // console.log(querySnapshot.docs.doc.data());
      let p = [];
      querySnapshot.forEach((doc) => {
        console.log("Snap");
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        p.push({ ...doc.data(), id: doc.id });
        // p.push(doc.data());
      });
      console.log(p);
      setProducts(p);
    } catch (error) {}
  };
  // console.log(products);
  useEffect(() => {
    console.log("useEffect");
    handleGetProducts();
  }, []);

  const handleDelete = async (item) => {
    console.log(item);
    await deleteDoc(doc(db, "products", item.id));
    handleGetProducts();
  };

  const handleEdit = (item) => {
    console.log("Edit");
    navigate("/updateproduct", { state: { item } });
  };
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" container mx-auto max-w-7xl">
          <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
            <div className=" bg-[#2f3640] w-[50.1em] w-full flex items-center justify-between p-2">
              <input
                type="text"
                className="w-80 py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300"
                placeholder="Search here"
              />
              <div className="flex items-center space-x-2">
                <img className="w-9" src="/img/react.png" alt="" />
                <h1 className="text-white text-2xl font-semibold">
                  React Firebase CRUD{" "}
                </h1>
              </div>
              <Link to={"/addproduct"}>
                <button className=" bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white">
                  Add Product
                </button>
              </Link>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-100 uppercase bg-[#353b48] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {products.length > 0 ? (
                  products.map((val, i) => (
                    <tr className="bg-gray-700 border-b text-white " key={i}>
                      <td className="px-6 py-4 text-left">1.</td>
                      <td className="px-6 py-4 text-left">
                        <img
                          className="w-20"
                          src="https://dummyimage.com/720x400"
                          alt=""
                        />
                      </td>
                      <td className="px-6 py-4 text-left" scope="col">
                        {val.title}
                      </td>
                      <td className="px-6 py-4 text-left">{val.price}</td>
                      <td className="px-6 py-4 text-left">{val.category}</td>
                      <td className="px-6 py-4 text-left">{val.date}</td>
                      <td className="px-6 py-4 text-left">
                        <a
                          className="font-medium bg-red-300 px-4 rounded-lg py-1 text-black cursor-pointer  "
                          onClick={() => handleDelete(val)}
                        >
                          Del
                        </a>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <a
                          onClick={() => handleEdit(val)}
                          className="font-medium bg-green-300 px-4 rounded-lg py-1 text-black
                                                    cursor-pointer"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="flex justify-center">
                    <td>
                      <h2 className="text-4xl ">No Data</h2>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
