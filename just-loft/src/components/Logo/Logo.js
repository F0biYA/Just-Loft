import React from "react";
import './Logo.css';
import { Link } from 'react-router-dom';
function Logo() {

  return (

    <Link to="/" className="logo hover"></Link>
  )
};
export default Logo;