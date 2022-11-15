import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo'
import Services from '../Services/Services';
import Faq from '../Faq/Faq';
import ServiceButton from '../ServiceButton/ServiceButton';
import './Main.css';
import Lofts from '../Lofts/Lofts';
import Popup from '../Popup/Popup';
import InfoTooltip from '../InfoPopup/InfoPopup';
import CalendarPopup from '../CalendarPopup/CalendarPopup';

function Main(props) {

    return (
        <section className='main'>
            <Popup isOpen={props.isOpen} onClose={props.closePopup} postMessage={props.postMessage} />
            <InfoTooltip status={props.status} infoPopup={props.infoPopup} onClose={props.closePopup} />
            <CalendarPopup isOpen={props.calendarPopup} onClose={props.closePopup} />
            <Header 
            openCalendarPopup={props.openCalendarPopup}
                children={<>
                    <a href="#промо" className="navigationBar__link hover">Оставить заявку</a>
                    <a href="#заявка" className="navigationBar__link hover">Наши лофты</a>
                    <a onClick={props.openCalendarPopup} href="#зявка" className="navigationBar__link hover">Посмотреть календарь</a>
                    <a href="#лофты" className="navigationBar__link hover">Услуги</a>
                    <a href="#faq" className="navigationBar__link hover">FAQ</a>
                    <a href="#контакты" className="navigationBar__link hover">Контакты</a>
                </>} />
            <Promo />
            <ServiceButton onClick={props.openFormPopup} />
            <Lofts />
            <Services />
            <Faq />
            <Footer />
        </section>
    )
}
export default Main;