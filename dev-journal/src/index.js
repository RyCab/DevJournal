import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AboutUs from "./pages/AboutUs/AboutUs";
import SignUp from "./pages/SignUpPage";
import SignIn from "./pages/SignInPage";
import { Profile } from './components/Profile/Profile';
import { UserEdit } from './components/AdminPanel/UserEdit';
// import { AdminPanel } from './components/AdminPanel/AdminPanel';
import AdminPage from "./pages/AdminPage";
// import ProfileSettings from "./pages/ProfileSettingsPage";
// import StoreDetails from "./pages/StoreDetailsPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from './pages/HomePage';
import  TestingPage  from './pages/Testing';
import ReactGA from "react-ga4";


// Create root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// GOOGLE ANALYTICS
ReactGA.initialize("G-ZEC97HCXBM");
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
          <Route path="/AdminPanel" element={<AdminPage/>} />
          <Route path="/adminUserEdit" element={<UserEdit />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Testing" element={<TestingPage/>} />
          {/* <Route path="/StoreDetails/:storeId" element={<StoreDetails />} /> */}
          <Route path="*" element={<p>Route not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
// GOOGLE ANALYTICS
const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
