import React from "react";
import { Outlet } from "react-router";
import Latbar from "./pure/Latbar";

const Layout = () => {
  return (
    <main className="App">
      <Latbar />
      <Outlet />
    </main>
  );
};

export default Layout;
