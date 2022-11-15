import React from "react";
import './CalendarPopup.css';
import Iframe from "react-iframe";
function CalendarPopup(props) {

    return (
        <section className={props.isOpen ? "popup opened fadeIn" : "popup"}>
            <div className="calendar__container">
            <Iframe
                    url="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%237986CB&ctz=Europe%2FMoscow&title=JUST-LOFT&src=Zm9iaXlhMTk4MkB5YW5kZXgucnU&src=cTIydjA3bjc3MHZraTZnbXB1Y2JjYmxtcjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23E4C441&color=%2333B679&color=%230B8043"
                    id="calendar"
                    className="calendar__frame"
                    display="initial"
                    position="relative" />
            {/* <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%237986CB&ctz=Europe%2FMoscow&title=JUST-LOFT&src=Zm9iaXlhMTk4MkB5YW5kZXgucnU&src=cTIydjA3bjc3MHZraTZnbXB1Y2JjYmxtcjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23E4C441&color=%2333B679&color=%230B8043" style="border:solid 1px #777" width="320" height="300" frameborder="0" scrolling="no"></iframe> */}
{/* 
                <Iframe
                    url="https://calendar.yandex.ru/embed/month?&layer_ids=19451687&tz_id=Europe/Moscow&layer_names=5 ELEMENT"
                    id="calendar"
                    className="calendar__frame"
                    display="initial"
                    position="relative" /> */}
                <button type="button" onClick={props.onClose} className="form__close-button hover"></button>
            </div>
        </section>
    )
}
export default CalendarPopup;