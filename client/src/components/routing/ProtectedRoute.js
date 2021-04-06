import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Is authenticated
  const isAuth = localStorage.getItem("isAuth");

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Component exact {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
