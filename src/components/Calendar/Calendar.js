import React from 'react';
import CalendarDescription from '../CalendarDescription/CalendarDescription';
import CalendarConfirmation from '../CalendarConfirmation/CalendarConfirmation';
import CalendarSuccessRegistrationPopup from '../CalendarSuccessRegistrationPopup/CalendarSuccessRegistrationPopup';
import api from '../../utils/Api';
// import { CalendarContext } from "../../contexts/CalendarContext";


function Calendar(props) {

  React.useEffect(() => {
    api.getCalendar()
    .then((res) => {
      setCalendarData(
        res.calendar.map((item)=>({
          _id: item.id,
          title:item.title,
          address: item.address,
          booked: item.booked,
          city: item.city,
          contact: item.contact,
          description: item.description,
          seats: item.seats,
          takenSeats: item.takenSeats,
          date:item.startAt,
        }))
      )
    console.log('calendarData', calendarData);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen ] = React.useState(false);
  const [isDescriptionPopupOpen, setIsDescriptionPopupOpen ] = React.useState(false);
  const [isSuccessRegistrationPopupOpen, setIsSuccessRegPopupOpen] = React.useState(false);

  const [calendarData, setCalendarData] = React.useState([]);




  function handleSuccessRegistrationPopup(){
    setIsSuccessRegPopupOpen(!isSuccessRegistrationPopupOpen);
    handleCancelClick();
  }

  function handleRegFromSecondVariant(){
    setIsSuccessRegPopupOpen(!isSuccessRegistrationPopupOpen);
    handleOnDescriptionClick();
  }

  function handleCancelClick() {
    setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
  }

  function handleOnDescriptionClick(){
    setIsDescriptionPopupOpen(!isDescriptionPopupOpen);
  }

  function closeAllPopups(){
    setIsConfirmationPopupOpen(false);
    setIsDescriptionPopupOpen(false);
    setIsSuccessRegPopupOpen(false);
  }


  return (
    <>
      <main className="main">
        <section className="calendar-container page__section">
  {calendarData.map((calendar) => (
  <article className="calendar calendar_selected">
  <div className="calendar__caption">
    <div className="calendar__info">
      <p className="calendar__type">Волонтёры + дети</p>
      <p className="calendar__weekday">Декабрь / понедельник</p>
    </div>
    <div className="calendar__about">
      <h2 className="section-title calendar__title">
      {calendar.title}
      </h2>
      <p className="calendar__date">05</p>
    </div>
  </div>
  <div className="calendar__meetup">
    <ul className="calendar__info-list">
      <li className="calendar__info-item">
        <p className="calendar__time">12:00–14:00</p>
      </li>
      <li className="calendar__info-item">
        <p className="calendar__place">
          {calendar.address}
        </p>
      </li>
      <li className="calendar__info-item">
        <p className="calendar__contact">{calendar.contact}</p>
        <p className="calendar__contact"></p>
      </li>
    </ul>
    <div className="calendar__submit">
      <button
        className="button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up"
        type="button"
        onClick={handleCancelClick}
      >
        Отменить запись
      </button>
      <p className="calendar__place-left"></p>
      <button
        className="button calendar__button-dots button_theme_light"
        type="button"
        onClick={handleOnDescriptionClick}
      >
        &#8226;&#8226;&#8226;
      </button>
    </div>
  </div>
</article>
       ))}
        </section>
      </main>
      <CalendarConfirmation
      isOpen={isConfirmationPopupOpen}
      onClose={closeAllPopups}
      handleSuccessRegClick={handleSuccessRegistrationPopup}
       />
      <CalendarDescription
      isOpen={isDescriptionPopupOpen}
      onClose={closeAllPopups}
      handleDescriptionClick={handleRegFromSecondVariant}
/>
      <CalendarSuccessRegistrationPopup
      isOpen={isSuccessRegistrationPopupOpen}
      handleCloseSuccessRegPopup={closeAllPopups}
      />
    </>
  );
}

export default Calendar;
