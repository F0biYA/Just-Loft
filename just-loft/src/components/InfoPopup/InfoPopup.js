import React from 'react';
import statusFail from '../../images/denied.svg';
import statusOk from '../../images/success.svg';
import './InfoPopup.css';

/*компонет всплывающего окна*/
function InfoTooltip(props) {
    return (
        <div className={props.infoPopup ? 'popup opened fadeIn' : 'popup'}>
            <div className="infoPopup__container">
                <img
                    className="popup__info-image"
                    src={props.status ? statusOk : statusFail}
                    alt="Статус"
                />
                <h2 className="infoPopup__text">
                    {props.status
                        ? "Ваша заявка успешно принята! Совсем скоро мы свяжемся с Вами!"
                        : "Что-то пошло не так! Попробуйте ещё раз."
                    }
                </h2>
                <button
                    onClick={props.onClose}
                    type="button"
                    className="infoPopup__button hover"
                >ОК</button>
            </div>
        </div>
    )
}
export default InfoTooltip;