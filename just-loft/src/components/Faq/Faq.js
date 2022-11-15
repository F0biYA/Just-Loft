import React, {useState} from "react";
import FaqCard from "../FaqCard/FaqCard";
import './Faq.css';
import {FAQ} from "../../utils/constants";

function Faq() {
// const [display, setDisplay] = useState(false);
    function handleClickOpen(evt) {

        evt.target.classList.add('open');
        // setDisplay(true);
    }

    function handleClickClose(evt) {
        evt.target.classList.remove('open')
    }

    function getFaqCards(arr) {

        return arr.map((item) => {

            return (
                <FaqCard 
                title={item.title}
                // display={display}
                subTitle={item.subTitle}
                open={handleClickOpen} close={handleClickClose} />
            )
        })
    }
    return (
        <section id='faq' className="faq">
            <h3 className="faq__title">FAQ</h3>
            <div className="faq__container">
            {getFaqCards(FAQ)}
            </div>
        </section>
    )
}
export default Faq;