import React, { useEffect, useState } from "react";
import { login, jwt } from "./cart";
import Login from "./Login";
const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe((val)=>setToken(val??""));
  }, []);

  return (
    <div>
      <div></div>
      JWT: {token} <Login />
    </div>
  );
};

export default CartContent;
