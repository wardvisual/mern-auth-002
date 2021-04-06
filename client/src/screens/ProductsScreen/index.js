import React from "react";
import { useDispatch } from "react-redux";

import { authLogout } from "../../actions/auth";

import "./index.css";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authLogout());
  };

  return (
    <div className="product-screen">
      <h1>PRODUCTS!!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProductsScreen;
