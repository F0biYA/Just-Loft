import React from "react";
import './Popup.css';
import { useForm } from 'react-hook-form';
function Popup(props) {
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange', });

    function onSubmit(data) {
        props.postMessage(data.name, data.telefon, data.note);
        props.onClose();
    }

    return (
        <section className={props.isOpen ? "popup opened fadeIn" : "popup"}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <button type="button" onClick={props.onClose} className="form__close-button hover"></button>
                <h3 className="form__title">Мы обязательно свяжемся с Вами!</h3>
                <fieldset className="form__container">
                    <div className="form__input-container">
                        <label className="form__input__title">Ваше имя</label>
                        <input
                            className="form__input pointer"
                            type="text"
                            placeholder="Имя"
                            {...register("name", {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Количество символов не менее 2',
                                },
                                maxLength: {
                                    value: 40,
                                    message: 'Количество символов не более 40',
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё ]+$/i,
                                    message: 'Разрешены только буквы'
                                }
                            })}
                        >
                        </input>
                        {/* pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}" */}
                        <span className="form__error"> {errors?.name && errors.name.message}</span>
                    </div>
                    <div className="form__input-container">
                        <label className="form__input__title">Ваш телефон в формате +7 или 8</label>
                        <input className="form__input pointer"
                            type="telefon"
                            placeholder="Телефон"
                            {...register("telefon", {
                                required: 'Поле обязательно к заполнению',
                                maxLength: {
                                    value: 16,
                                    message: 'Слишком большое количество символов',
                                },
                                pattern: {
                                    value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
                                    message: 'Введите корректный номер'
                                }
                            })}></input>
                        <span className="form__error">{errors.telefon && errors.telefon.message}</span>
                    </div>
                    <div className="form__input-container ">
                        <label className="form__input__title">Ваше сообщение</label>
                        <input
                            className="form__input pointer form__input_note"
                            type="text"
                            placeholder="Ваше сообшение"
                            {...register("note", {
                                maxLength: {
                                    value: 200,
                                    message: 'Количество символов не более 200',
                                },

                            })}
                        >
                        </input>
                        <span className="form__error"> {errors?.note && errors.note.message}</span>
                    </div>
                </fieldset>
                <button className={isValid ? "form__submit-button hover" : "form__submit-button form__submit-button_disabled"}
                    disabled={!isValid}>Отправить</button>
            </form>
        </section>
    )
}
export default Popup;