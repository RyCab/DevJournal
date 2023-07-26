// analytics.js

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-8JLSP68215'); // Replace with your Google Analytics Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};