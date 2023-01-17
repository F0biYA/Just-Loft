import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import './NavMenu.css';

function NavMenu({ isOpen, isClose, openCalendarPopup, openFormPopup }) {
  const location = useLocation();
  const handleLinkClick=()=> {
    isClose();
    openFormPopup();
  }
  return (
    <section className={isOpen ? `navMenu navMenu_open` : `navMenu`}>
      <nav className="navMenu__container">
        <button type="button" onClick={isClose} className="navMenu__container__close-button hover"></button>
        <NavLink to='/' end
          className={({ isActive }) =>
            isActive ? 'link_state_active navMenu__container__link hover' : 'navMenu__container__link hover'}>Главная</NavLink>
        <a onClick={handleLinkClick} href='#'className='navMenu__container__link hover' >Оставить заявку</a>
        <button onClick={openCalendarPopup}  className='navMenu__container__link hover' >Посмотреть календарь</button>
        <NavLink to='/5ELEMENT' className={({ isActive }) =>
          isActive ? 'link_state_active navMenu__container__link hover' : 'navMenu__container__link hover'}  >5ELEMENT-тарифы и характеристики</NavLink>
        <a onClick={isClose} href={location.pathname === "/" ? '#контакты' : '5ELEMENT#контакты'} className='navMenu__container__link hover' >Контакты</a>
      </nav>

    </section>
  )
}
export default NavMenu;
