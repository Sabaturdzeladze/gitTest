import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={props =>
      localStorage.getItem("authorized") ? <Component {...props}/> : <Redirect to="/login" />
    }
  />
);
