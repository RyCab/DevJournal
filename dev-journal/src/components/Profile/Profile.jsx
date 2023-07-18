import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './styles.css';
import { useNavigate } from "react-router-dom";

export const Profile = (props) => {
    const { user } = useContext(AuthContext);
    const authContext = useContext(AuthContext);
    console.log("USER ", user);
    const navigate = useNavigate();

    const handleLogout = () => {
      authContext.onLogout();
    };

    

  return (

    <div className="profile-container">
      {authContext.loggedIn ? (
        <div className="profile">
            <h1>{user.username}</h1>
            <div className="submit-button-group">
              <button
                id="edit-btn"
                onClick={() => props.handleSwitchModal("editProfile")}
              >
                Edit
              </button>
              <button id="signout-btn" onClick={handleLogout}>
                Sign out
              </button>
            </div>
        </div>

      ) : (
        <>
          {navigate('/signIn')}
        </>
      )}
    </div>
  )
}
