import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="bg-black font-[gilroy]">
      <Header />
      <App />
      <Footer />
    </div>
  </BrowserRouter>
);
