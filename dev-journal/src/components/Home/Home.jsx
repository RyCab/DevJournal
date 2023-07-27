import React from "react";
import './styles.css';
import { Navbar } from '../Navbars/Navbar/Navbar';
import { Outlet } from "react-router-dom";
import DevicesIcon from '@mui/icons-material/Devices';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import { Footers } from "../Footers/Footers";
import { Subscribe  } from "../Subscribe/Subscribe";


export const Home = () => {
  return (
    <div className="homePage-con">
      {/* <img id="homeImage" src={homeImage2}></img> */}
      <div className="homePage-content">
        <div className="home-con-left">
          <h1 id="homePage-title">DEVELOP WITH DEVJOURNAL</h1>
          <p id='homePage-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo totam, non aliquam omnis reiciendis tenetur dolorum adipisci recusandae nulla blanditiis tempore fugit voluptatibus nam illo doloribus ex corporis delectus?</p>
          <div className="home-btn-con">
            <button id='homePage-btn'>CONTACT US</button>
          </div>
        </div>
        <div className="home-con-right">

        </div>
      </div>
      <div className="feature-con">
        <div className="feature-title-con">

          <h1 id='feature-title'>OUR FEATURES</h1>
        </div>
        <div className="features-content-con">
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DrawOutlinedIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>FRONTEND DEVELOPMENT</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <Inventory2OutlinedIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>DATABASE SETUP</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>RESPONSIVE DESIGN</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>SOURCE CODE</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>CUSTOM CODE</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>WEB HOSTING</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>CRM SETUP</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>BRAND DESIGN</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
          <div className="feature-content-card">
            <div className="feature-icon-con">
              <DevicesIcon id='feature-icon'/>
            </div>
            <h3 id='feature-content-title'>SEO</h3>
            <p id='feature-desc'>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Ipsam debitis. Ipsam debitis. 
              Ipsam debitis. Ipsam debitis.</p>
          </div>
         
        </div>
      </div>
      <Subscribe/>
      <Footers/>
    </div>
  );
};
