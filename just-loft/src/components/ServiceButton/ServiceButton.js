import React from "react";
import './ServiceButton.css'
function ServiceButton(props) {

    return (
        <section id="заявка" className="serviceButton">
            <button id="заявка" onClick={props.onClick} className="serviceButton__element ">Оставьте Вашу заявку</button>
        </section>
    )
}
export default ServiceButton;