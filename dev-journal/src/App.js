import './App.css';
import { Layout } from "./components/Layout/Layout";
import React, { useEffect } from 'react';
import { initGA, logPageView } from './analytics';

function App() {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Track the initial page view

    // Additional tracking can be done for user interactions, events, etc.
    // For example, you can track button clicks, form submissions, etc. using:
    // ReactGA.event({ category: 'User Interaction', action: 'Clicked Button' });
  }, []);
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
