import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServiceButton from "../ServiceButton/ServiceButton";
import './Loft.css';
import Popup from "../Popup/Popup";
import InfoTooltip from "../InfoPopup/InfoPopup";
import Gallery from "../Gallery/Gallery";
import Parametres from "../Parametres/Parametres";
import Tarifs from "../Tarifs/Tarifs";
import CalendarPopup from "../CalendarPopup/CalendarPopup";

function Loft(props) {

    return (
        <section className="loft">
            <Popup isOpen={props.isOpen} onClose={props.closePopup} postMessage={props.postMessage} />
            <CalendarPopup isOpen={props.calendarPopup} onClose={props.closePopup} />
            <InfoTooltip status={props.status} infoPopup={props.infoPopup} onClose={props.closePopup} />
            <Header
            openFormPopup={props.openFormPopup}
            openCalendarPopup={props.openCalendarPopup}
                children={<>
                    <a href="#" onClick={props.openFormPopup}className="navigationBar__link hover">Оставить заявку</a>
                    <a onClick={props.openCalendarPopup} href="#зявка" className="navigationBar__link hover">Посмотреть календарь</a>
                    <a href="#галлерея" className="navigationBar__link hover">Галлерея</a>
                    <a href="#тариф" className="navigationBar__link hover">Тарифы</a>
                    <a href="#контакты" className="navigationBar__link hover">Контакты</a></>} />
            <Gallery />
            <ServiceButton onClick={props.openFormPopup} />
            <Parametres />
            <Tarifs/>
            <Footer />

        </section>
    )
}
export default Loft;