// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.scss';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Plausible from 'plausible-tracker';
// import { init } from '@plausible-analytics/tracker'

// Initialize Plausible
const plausible = Plausible({
  domain: 'ovi-landing-page.netlify.app/', // Replace with your domain
  trackLocalhost: true, // Enabled to track localhost
});

// Enable automatic pageview tracking
plausible.enableAutoPageviews();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
