import React from "react";
import './Tarifs.css';

function Tarifs() {

    return (
        <section id='тариф' className="tarifs">
            <h4 className="parametres__title"> Тарифы
            </h4>
            <div className="parametres__container">
                <div className="parametres__container__propertys">
                    <p className="tarifs__property">Дни/Время</p>
                    <p className="tarifs__property">Рабочие дни</p>
                    <p className="tarifs__property">Пятница</p>
                    <p className="tarifs__property">Суббота</p>
                    <p className="tarifs__property">Воскресенье</p>
                    <p className="tarifs__property">Парковка</p>
                </div>
                <div className="tarifs__container__columns">
                    <p className="tarifs__property">00:00-08:00</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                </div>
                <div className="tarifs__container__columns">
                    <p className="tarifs__property">08:00-21:00</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                </div>
                <div className="tarifs__container__columns">
                    <p className="tarifs__property">17:00-00:00</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                    <p className="tarifs__value">2 000</p>
                </div>
            </div>
        </section>
    )
}
export default Tarifs;
