import React from "react";
import './GalleryPopup.css';
function GalleryPopup({ image, clearInterval, setActiveIndex, activeIndex, img, onClose }) {
    const handleImageClick=()=> {
        clearInterval();

        if (activeIndex === img.length -1 ) setActiveIndex(0)
        else 
        setActiveIndex(activeIndex + 1);
    }

    const handleImagePrevious=()=> {
        clearInterval();

        if (activeIndex === 0 ) setActiveIndex(img.length -1)
        else 
        setActiveIndex(activeIndex - 1);
    }
    return (
        <div className='gallery__popup gallery__popup_opened'>
            <div className="popup__image-container">
            <img src={image}  className="gallery__popup__image" onClick={handleImageClick}/>
                 <button onClick={onClose} type="button" className="popup__button-close_image popup__button-close"> </button>
                 <button onClick={handleImagePrevious} type="button" className="popup__button-close_image popup__button-left"> </button>
                 <button onClick={handleImageClick} type="button" className="popup__button-close_image popup__button-right">
                </button>
               
            </div>
        </div>);
}
export default GalleryPopup;