import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./components";
import {
  HomeScreen,
  ProductsScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from "./screens";

import "./app.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/products" component={ProductsScreen} />
        <Route
          exact
          path="/auth/resetpassword/:resetToken"
          component={ResetPasswordScreen}
        />
        <Route
          exact
          path="/auth/forgotpassword/"
          component={ForgotPasswordScreen}
        />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
      </Switch>
    </Router>
  );
};

export default App;
