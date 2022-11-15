import React, { useEffect, useState } from "react";
import './Lofts.css';
import loft_1_1 from '../../images/Loft-1-1.jfif';
import loft_2_1 from '../../images/Loft2-1.jfif';

import { LOFT_1 } from "../../utils/constants";
import { LOFT_2 } from "../../utils/constants";
import { Link } from "react-router-dom";

function Lofts() {

    const [fotoFirst, setFotoFirst] = useState(loft_1_1);
    const [fotoSecond, setFotoSecond] = useState(loft_2_1);
    
    return (
        <section id='лофты' className="lofts">
            <h2 className="lofts__title">Наши лофты</h2>
            <div className="lofts__container">
                <Link to='/5ELEMENT' className="lofts__container__element hover__image">
                    <h3 className="lofts__container__title">5ELEMENT</h3>
                    <img src={fotoFirst} className="lofts__container__image " alt='test'></img>
                </Link>
                <Link to='/#' className="lofts__container__element hover__image">
                    <h3 className="lofts__container__title">my hood</h3>
                    <img src={fotoSecond} className="lofts__container__image" alt='test'></img>
                    <p className="notWorking">Сейчас ЛОФТ на ремонте, но уже очень скоро мы откроемся</p>
                </Link>
            </div>
        </section>
    )
}
export default Lofts;