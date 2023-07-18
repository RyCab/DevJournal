import React, { useContext, useEffect, useState } from "react";
import './styles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/profile');
  };
  const authContext = useContext(AuthContext);
  return (
    <div>
      {authContext.loggedIn ? (
            
        <div className="logged-container">
          <>
            <div className='navbar-con'>
              <div className="nav-title-con">
                <h1 id="nav-title">DevJournal</h1>
              </div>
              <div className="nav-links-con">
                <a href="/" id='nav-link1'>HOME</a>
                <a href="" id='nav-link2'>ABOUT</a>
                <a href="" id='nav-link2'>CONTACT</a>
              </div>
              <div className="nav-icons-con">
                <InstagramIcon
                    id='insta'
                />
                <TwitterIcon
                    id='twitter'
                />
                <AccountCircleIcon
                    id="account"
                    onClick={handleNavigate}
                />
              </div>
            </div>
          </>
        </div>
      ) : (
      <>
        <div className='navbar-con'>
          <div className="nav-title-con">
            <h1 id="nav-title">DevJournal</h1>
          </div>
          <div className="nav-links-con">
            <a href="/" id='nav-link1'>HOME</a>
            <a href="" id='nav-link2'>ABOUT</a>
            <a href="" id='nav-link2'>CONTACT</a>
          </div>
          <div className="nav-icons-con">
            <InstagramIcon
                id='insta'
            />
            <TwitterIcon
                id='twitter'
            />
            {/* <AccountCircleIcon
                id="account"
                onClick={handleNavigate}
            /> */}
          </div>
        </div>
      </>
      )}
    </div>
  )
}
