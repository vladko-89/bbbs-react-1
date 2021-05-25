import React from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import CalendarDescription from '../CalendarDescription/CalendarDescription';
import CalendarConfirmation from '../CalendarConfirmation/CalendarConfirmation';
import CalendarSuccessRegistrationPopup from '../CalendarSuccessRegistrationPopup/CalendarSuccessRegistrationPopup';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import api from '../../utils/Api';
// import { CalendarContext } from "../../contexts/CalendarContext";

function Calendar() {
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);
  const [isDescriptionPopupOpen, setIsDescriptionPopupOpen] = React.useState(false);
  const [isSuccessRegistrationPopupOpen, setIsSuccessRegPopupOpen] = React.useState(false);
  const [calendarData, setCalendarData] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filtredData, setFiltredData] = React.useState(null);

  const FilterArrayFirst = [...new Set(calendarData.map((el) => format(new Date(el.startAt), 'LLL', { locale: ruLocale })))];

  console.log(FilterArrayFirst);
  React.useEffect(() => {
    api.getCalendar()
      .then((res) => {
        setCalendarData(res.calendar);
        // eslint-disable-next-line no-console
        console.log('res.calendar', res.calendar);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  function handleCancelClick() {
    setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
  }
  function handleOnDescriptionClick() {
    setIsDescriptionPopupOpen(!isDescriptionPopupOpen);
  }
  function handleSuccessRegistrationPopup() {
    setIsSuccessRegPopupOpen(!isSuccessRegistrationPopupOpen);
    handleCancelClick();
  }

  function handleRegFromSecondVariant() {
    setIsSuccessRegPopupOpen(!isSuccessRegistrationPopupOpen);
    handleOnDescriptionClick();
  }

  function closeAllPopups() {
    setIsConfirmationPopupOpen(false);
    setIsDescriptionPopupOpen(false);
    setIsSuccessRegPopupOpen(false);
  }
  function filterOn(value) {
    setFiltredData(calendarData.filter((item) => format(new Date(item.startAt), 'LLL', { locale: ruLocale }) === value));
  }

  if (filtredData) {
    return (
      <>
        <main className="main">
          <section className="lead page__section">
            <MainTitle title="Календарь" />
            <Filter onActive={filterOn} array={FilterArrayFirst} />
          </section>
          <section className="calendar-container page__section">
            {filtredData.map((calendar) => (
              <CalendarEvent
                key={calendar.id}
                booked={calendar.booked}
                title={calendar.title}
                address={calendar.address}
                contact={calendar.contact}
                startAt={calendar.startAt}
                endAt={calendar.endAt}
                seats={calendar.seats}
                takenSeats={calendar.takenSeats}
                onCancel={handleCancelClick}
                onDescription={handleOnDescriptionClick}
              />
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

  return (
    <>
      <main className="main">
        <section className="lead page__section">
          <MainTitle title="Календарь" />
          <Filter onActive={filterOn} array={FilterArrayFirst} />
        </section>
        <section className="calendar-container page__section">
          {calendarData.map((calendar) => (
            <CalendarEvent
              key={calendar.id}
              booked={calendar.booked}
              title={calendar.title}
              address={calendar.address}
              contact={calendar.contact}
              startAt={calendar.startAt}
              endAt={calendar.endAt}
              seats={calendar.seats}
              takenSeats={calendar.takenSeats}
              onCancel={handleCancelClick}
              onDescription={handleOnDescriptionClick}
            />
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
