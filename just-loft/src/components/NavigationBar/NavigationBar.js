import React, { useState } from "react";
import './NavigationBar.css';
import NavMenu from "../NavMenu/NavMenu";
function NavigationBar(props) {


  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavMenuClick = () => setIsNavMenuOpen(!isNavMenuOpen);
  const closeNavMenuClick = () => setIsNavMenuOpen(false);

  const burgerClick=()=> {  
    const burger = document.getElementById('navBurger');
    burger.classList.toggle('open');
    setIsNavMenuOpen(!isNavMenuOpen);

  }
  return (
    <>
      <nav className="navigationBar__container">
        {props.children}
      </nav>

<div id="navBurger" onClick={burgerClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
      {/* <button className="navigationBar__button-menu hover" onClick={handleNavMenuClick}></button> */}
      <NavMenu isOpen={isNavMenuOpen} openFormPopup={props.openFormPopup} isClose={closeNavMenuClick} openCalendarPopup={props.openCalendarPopup}></NavMenu>
    </>
  )
}
export default NavigationBar;
