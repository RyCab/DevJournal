import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import usePost from "../../hooks/crud/usePost";
// import { ProfileModal } from "../ProfileModal/ProfileModal";
import "./styles.css";
import { Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const SignIn = (props) => {
  const authContext = useContext(AuthContext);

  const { postData, responseData, loading } = usePost("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      postData({
        email,
        password,
      });
    } catch (err) {
      setError(err.response.data.error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loading && responseData?.token) {
      authContext.onLogin(responseData.user, responseData.token);
      console.log("Logged in successfully!");
    }
  }, [loading]);

    //  const history = useHistory(); 
    //  let path = `/`; 

  return (
    <div className="signIn">
    {/* <div className="modal" onClick={() => props.handleSwitchModal("")}> */}
      <div className="signIn-container">
      {/* <div className="signIn-container" onClick={(e) => e.stopPropagation()}> */}
        {authContext.loggedIn ? (
          
          <div className="logged-container">
            {navigate('/')}
          </div>
        ) : (
          <>
            <h1 id="signIn-title">Sign In</h1>
            <form className="signIn-form" onSubmit={handleSubmit}>
              <input
                id="email-input"
                type="email"
                placeholder="Email"
                value={email.toLocaleLowerCase()}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="password-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div id="error">{error}</div>}
              <div className="submit-button-group">
                <button type="submit" id="submit">
                  Sign In
                </button>
                <div className="sign-up-now">
                <p id="user-redirect">Not a user yet? <a id="user-redirect-a" href="/SignUp">Sign Up</a> now!</p>
              </div>
              </div>
            </form>
          </>
        )}
      </div>
      <div className="signin-rightPanel">
        {/* aaa */}
      </div>
    </div>
  );
};
