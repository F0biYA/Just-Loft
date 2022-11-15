import React, { useState, useEffect } from "react";
import './Gallery.css';
import slide1 from "../../images/Loft-1-1.jfif";
import slide2 from "../../images/Loft1-2.jfif";
import slide3 from "../../images/Loft1-3.jfif";
import slide4 from "../../images/Loft1-4.jfif";
function Gallery() {
    const img = [
        slide1,
        slide2,
        slide3,
        slide4,
    ];
    // Индекс текущего слайда
    const [activeIndex, setActiveIndex] = useState(0);

    // Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 7000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])
    
    return (
        <section id="галлерея" className="gallery">
            <h3 className="gallery__title">5element</h3>
            <div className="gallery__container">
                <div className="gallery__slider">
                    <img className="slider-img" alt=''

                        src={img[activeIndex]} />
                </div>
                <p className="gallery__description">5 element - это яркое , атмосферное и уютное лофт пространство в центре Москвы, идеально подходящее для проведения любых видов мероприятий. Хочется устроить свою незабываемую  вечеринку , на которой никто не помешает Вашему отдыху , с индивидуальной тематикой и креативным подходом ? Мы ждём Вас !
                    В нашем лофте есть всё необходимое для организации и проведения тренингов, семинаров, репетиции, вечеринок, дней рождений, корпоративных встреч, фотосессии и т.д.
                    Команда Just Loft с радостью рассмотрит и реализует Ваши пожелания, а также поможет организовать незабываемое мероприятие.
                </p>
            </div>

        </section>
    )
}
export default Gallery;
