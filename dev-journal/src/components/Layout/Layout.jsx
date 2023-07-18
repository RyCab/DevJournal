import React from "react";
import './styles.css';
import { Navbar } from '../Navbars/Navbar/Navbar';
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout-con">
      <Navbar/>
      <Outlet/>
    </div>
  );
};
