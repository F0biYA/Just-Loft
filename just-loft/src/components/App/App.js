import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import { api } from '../../utils/Api';
import Loft from '../Loft/Loft';

function App() {
  const [formPopup, setFormPopup] = useState(false)
  const [calendarPopup, setCalendarPopup] = useState(false);
  const[infoPopup, setInfoPopup] = useState(false);
  const[status, setStatus] = useState(false);

  const closePopup = (popup) => {
    setCalendarPopup(false);
    setFormPopup(false);
    setInfoPopup(false);
  }
  const openFormPopup = () => setFormPopup(true);
  //const openCalendarPopup = () => setCalendarPopup(true);

  function handlePostMessage(name, telefon, note) {
    return api.postBotMessage(name, telefon, note)
      .then((data) => {
        setInfoPopup(true);
        setStatus(true)
        console.log(data)
      })
      .catch((err) => {
        setInfoPopup(true);
        setStatus(false);
        console.log(err);
      })
  }
  return (
    <Routes>
      <Route path='/' element={   
         <Main openFormPopup={openFormPopup} status={status}  infoPopup={infoPopup} closePopup={closePopup} isOpen={formPopup} postMessage={handlePostMessage}/> } />
        <Route path="/5ELEMENT" element={   
         <Loft openFormPopup={openFormPopup} status={status}   infoPopup={infoPopup} closePopup={closePopup} isOpen={formPopup} postMessage={handlePostMessage}/> } />
    </Routes >
  );
}

export default App;
