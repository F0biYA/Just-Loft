import React from "react";
import './Services.css';
import GAME_ZONE from '../../images/game-zone.png';
import CATERING from '../../images/кейтеринг.png';
import HOOKAH from '../../images/кальяны.png';
import KARAOKE from '../../images/караоке.png';
import LEARNING from '../../images/обучение.png';
import SHOWROOM from '../../images/Шоурум.png';

function Services() {
 
    return (
        <section id='услуги' className="services">
            <h2 className="services__title">Наши услуги</h2>
            <div className="services__container">
                <article className="services__card">
                    <img src={GAME_ZONE} className="services__image" alt=''></img>
                    <h3 className="services__card__title">Game Zone</h3>
                    <p className="services__card__subtitle">Хотите активно отдохнуть? У нас отличный выбор любых развлечений!</p>
                </article>
                <article className="services__card">
                    <img src={CATERING} className="services__image" alt=''></img>
                    <h3 className="services__card__title">Кейтеринг</h3>
                    <p className="services__card__subtitle">Хотите вкусно покушать или организовать банкет? Нет проблем !</p>
                </article>
                <article className="services__card">
                    <img src={HOOKAH} className="services__image" alt=''></img>
                    <h3 className="services__card__title">Кальян</h3>
                    <p className="services__card__subtitle">Услуги опытного кальянщика! Подробный рассказ об ароматах</p>
                </article>
                <article className="services__card">
                    <img src={KARAOKE} className="services__image" alt=''></img>
                    <h3 className="services__card__title">Караоке</h3>
                    <p className="services__card__subtitle">Пойте! Устраивайте Караоке вечеринки! Мы только ЗА!</p>
                </article>
                <article className="services__card">
                    <img src={LEARNING} className="services__image" alt=''></img>
                    <h3 className="services__card__title">Обучение</h3>
                    <p className="services__card__subtitle">Проводите лекции и семинары. Стульев хватит всем!</p>
                </article>
                <article className="services__card">
                    <img src={SHOWROOM} className="services__image" alt=''></img>
                    <h3 className="services__card__title">Шоу-Рум</h3>
                    <p className="services__card__subtitle">Есть свой интернет-магазин и есть что показать?! Поможем!</p>
                </article>
            </div>
        </section>
    )
}
export default Services;