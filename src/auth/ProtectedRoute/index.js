import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect exact to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
