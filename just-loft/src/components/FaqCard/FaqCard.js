import React, { useState, useEffect } from "react";
import './FaqCard.css';
import image_plus from '../../images/plus.svg';
import image_close from '../../images/close.svg'

function FaqCard(props) {
    const [display, setDisplay] = useState(false)

    function handleClick() {
        setDisplay(!display)
    }

    return (
        <div className="faqCard__element" onClick={handleClick}>
            <div className="faqCard__element__body">
                <h4 className="faqCard__element__title">{props.title}</h4>
                <img src={!display ? image_plus : image_close} className="faqCard__element__button" alt='кнопочка' />
            </div>
            <p className={display ? "faqCard__element__subTitle" : "hide"}>{props.subTitle}</p>
        </div>
    )

}
export default FaqCard;