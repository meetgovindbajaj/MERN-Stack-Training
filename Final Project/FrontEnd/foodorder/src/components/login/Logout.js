import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        document.location.pathname = "/login";
        history.push("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <h1>Logout Page</h1>;
};

export default Logout;
