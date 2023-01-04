import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const loginData = useSelector((a) => a.loginReducer);
  console.log(loginData);

  return (
    <div>
      <h1>Home</h1>
      <h1>{loginData.email}</h1>
      <h1>{loginData.name}</h1>
      <h1>{"*".repeat(loginData.password.length)}</h1>
    </div>
  );
}
