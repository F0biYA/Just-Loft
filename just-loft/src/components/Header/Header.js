import './Header.css';
import React from 'react';
//import Logo from '../Logo/Logo';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Link, useLocation } from 'react-router-dom';
function Header(props) {
const location = useLocation();
const link = '/';
    return (
        <header className="header">
            <Link reloadDocument to={location.pathname === '/' ? '#root' : '/'} className="header__logo"></Link>
            <div className="header__container">
                <NavigationBar 
                openCalendarPopup={props.openCalendarPopup}
                children ={props.children}/>
            </div>
        </header>

    )
};

export default Header;