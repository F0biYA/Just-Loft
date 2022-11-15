import React from "react";
import './Parametres.css';

function Parametres() {

    return (
        <section className="parametres">
            <h4 className="parametres__title"> Характеристики Лофта
            </h4>
            <div className="parametres__container">
                <div className="parametres__container__propertys">
                    <p className="parametres__container__property">Плошадь</p>
                    <p className="parametres__container__property">Метро</p>
                    <p className="parametres__container__property">Вместимость</p>
                    <p className="parametres__container__property">Высота</p>
                    <p className="parametres__container__property">Санузел</p>
                    <p className="parametres__container__property">Парковка</p>
                </div>
                <div className="parametres__container__propertys">
                    <p className="parametres__container__value">100 кв. метров</p>
                    <p className="parametres__container__value">м.Бауманская</p>
                    <p className="parametres__container__value">до 60 человек</p>
                    <p className="parametres__container__value">3 метра</p>
                    <p className="parametres__container__value">4 санузла</p>
                    <p className="parametres__container__value">Городская парковка</p>
                </div>
                <ul className="parametres__container__list">
                    <li className="parametres__container__property">Wi - Fi</li>
                    <li className="parametres__container__property">Большой танцпол</li>
                    <li className="parametres__container__property">Кухня</li>
                    <li className="parametres__container__property">Барная стойка</li>
                    <li className="parametres__container__property">Качели</li>
                    <li className="parametres__container__property">Гардероб</li>
                </ul>
            </div>
            <p className="paramtres__plus-services"> А так же за дополнительную плату: столы 3 шт. ( 500р/шт), проектор (1000р/день), светомузыка (1500р/день), караоке (2000р/день), кальян (1000р/день)</p>
        </section>

    )
}
export default Parametres;
