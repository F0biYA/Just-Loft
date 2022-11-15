import React, { useState } from "react";
import './NavigationBar.css';
import NavMenu from "../NavMenu/NavMenu";
function NavigationBar(props) {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavMenuClick = () => setIsNavMenuOpen(true);
  const closeNavMenuClick = () => setIsNavMenuOpen(false);
  return (
    <>
      <nav className="navigationBar__container">
        {props.children}
      </nav>
      <button className="navigationBar__button-menu hover" onClick={handleNavMenuClick}></button>
      <NavMenu isOpen={isNavMenuOpen} isClose={closeNavMenuClick} openCalendarPopup={props.openCalendarPopup}></NavMenu>
    </>
  )
}
export default NavigationBar;
