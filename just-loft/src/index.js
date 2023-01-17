import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <ScrollToTop/>
      <App />
    </BrowserRouter>

);

reportWebVitals();
