import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ProtectedRoute({
  component: Component,

  ...rest
}) {
  const { auth, setAuth } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        if (auth.isLoggedIn) {
          return <Component {...props} />;
        } else {
          console.log("Should redirect to /login!");
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                  //to: "/login",
                },
              }}
            />
          );
        }
      }}
    />
  );
}
