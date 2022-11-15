import './Footer.css';
import React from 'react';
import Iframe from 'react-iframe'
//import { Switch, Link, Route } from 'react-router-dom';      записать библиотеку

function Footer() {

  return (
    <footer id='контакты' className="footer">
      <div className='footer__body'>
        <div className='footer__body__contacts'>
          <h5 className="footer__title">Наши контакты:</h5>
          <p className='footer__contact'>Tel: +7-000-000-00-00</p>
          <p className='footer__contact'>Whatsapp: +7-000-000-00-00</p>
          <p className='footer__contact'>Telegram: +7-000-000-00-00</p>
          <p className='footer__contact'>Email: xxxx@xx.ru</p>
          <p className='footer__contact'>Адресс: Москва, Гарднеровский переулок 3стр4</p>
        </div>
        <div className='footer__body__map'>
          <h5 className="footer__title">Схема проезда:</h5>
          <Iframe 
          url="https://yandex.ru/map-widget/v1/?um=constructor%3Ac68c1c00caa55a51082f0263567b777fd8ed474d74973d25b94ff37a1b54013b&amp;source=constructor"
        id="myId"
        className="footer__map"
        display="initial"
        position="relative"/>
      </div>
      </div>

      <div className="footer__container">
        <p className="footer__copyright">© 2022</p>
        <ul className="footer__links">
          <li className="hover"><a target="_blank" href="https://github.com/F0BiYa" className="footer__link neonText" rel="noreferrer">by Al. PuTIlIn</a></li>
        </ul>

      </div>
    </footer>

  )
};

export default Footer;