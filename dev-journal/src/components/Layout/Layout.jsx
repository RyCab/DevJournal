import React from "react";
import './styles.css';
import { Navbar } from '../Navbars/Navbar/Navbar';
import { Outlet } from "react-router-dom";

export const Layout = () => {
  if(window.location.href==='http://localhost:3001/adminpanel'){
    return (
      <div className="layout-con">
        <Outlet/>
      </div>
    );
  }
  else {
    return (
      <div className="layout-con">
        <Navbar/>
        <Outlet/>
      </div>
    );
  }
};
