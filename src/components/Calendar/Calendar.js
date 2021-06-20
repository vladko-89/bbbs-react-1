/* eslint-disable max-len */
import React from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import PropTypes from 'prop-types';
import CalendarDescription from '../CalendarDescription/CalendarDescription';
import CalendarConfirmation from '../CalendarConfirmation/CalendarConfirmation';
import CalendarSuccessRegistration from '../CalendarSuccessRegistration/CalendarSuccessRegistration';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import api from '../../utils/Api';
// import { CalendarContext } from "../../contexts/CalendarContext";

function Calendar({
  activeRubrics,
  selectRubric,
}) {
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);
  const [isDescriptionPopupOpen, setIsDescriptionPopupOpen] = React.useState(false);
  const [isSuccessRegPopupOpen, setIsSuccessRegPopupOpen] = React.useState(false);
  const [calendarData, setCalendarData] = React.useState([]);
  const [currentEvent, setCurrentEvent] = React.useState({ startAt: '2000-01-01T00:00:00Z', endAt: '2000-01-01T00:00:00Z' });
  const filterArray = [];
  const parsedCalendarData = calendarData.map((el) => ({
    name: format(new Date(el.startAt), 'LLLL', { locale: ruLocale }),
    slug: format(new Date(el.startAt), 'LLLL', { locale: ruLocale }),
  }));
  parsedCalendarData.forEach((el) => { if (!filterArray.some((item) => item.name === el.name)) { filterArray.push(el); } });

  React.useEffect(() => {
    api.getCalendar()
      .then((res) => {
        setCalendarData(res.calendar);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    selectRubric('All', true);
  }, []);

  function openConfirmationPopup() {
    setIsConfirmationPopupOpen(true);
  }

  function handleSuccessRegPopup() {
    setIsSuccessRegPopupOpen(true);
    openConfirmationPopup();
  }

  function closeAllPopups() {
    setIsConfirmationPopupOpen(false);
    setIsDescriptionPopupOpen(false);
    setIsSuccessRegPopupOpen(false);
  }

  function handleDescription(calendar) {
    setCurrentEvent(calendar);
    setIsDescriptionPopupOpen(true);
  }
  function handleBooking(calendar) {
    setCurrentEvent(calendar);
    openConfirmationPopup();
  }

  function handleCancelBooking(calendar) {
    // some handle code for backend
    // eslint-disable-next-line no-console
    console.log(calendar);
  }

  function handleImmidiateBooking(calendar) {
    // eslint-disable-next-line no-console
    console.log(calendar);
    setIsSuccessRegPopupOpen(true);
  }

  return (
    <>
      <main className="main">
        <section className="lead page__section">
          <MainTitle title="Календарь" />
          { filterArray.length > 1 ? <Filter array={filterArray} selectRubric={selectRubric} /> : ''}
        </section>
        <section className="calendar-container page__section">
          {calendarData.map((calendar) => (
            <CalendarEvent
              calendar={calendar}
              key={calendar.id}
              booked={calendar.booked}
              title={calendar.title}
              address={calendar.address}
              contact={calendar.contact}
              startAt={calendar.startAt}
              endAt={calendar.endAt}
              seats={calendar.seats}
              takenSeats={calendar.takenSeats}
              onBooking={handleBooking}
              onDescription={handleDescription}
              onCancel={handleCancelBooking}
              activeRubrics={activeRubrics}
              tags={[{
                name: format(new Date(calendar.startAt), 'LLLL', { locale: ruLocale }),
                slug: format(new Date(calendar.startAt), 'LLLL', { locale: ruLocale }),
              }]}
            />
          ))}
        </section>
      </main>
      <CalendarConfirmation
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
        handleSuccessRegClick={handleSuccessRegPopup}
        currentEvent={currentEvent}
      />
      <CalendarDescription
        isOpen={isDescriptionPopupOpen}
        onClose={closeAllPopups}
        onActionClick={handleImmidiateBooking}
        currentEvent={currentEvent}
      />
      <CalendarSuccessRegistration
        isOpen={isSuccessRegPopupOpen}
        handleCloseSuccessRegPopup={closeAllPopups}
        currentEvent={currentEvent}
      />
    </>
  );
}
Calendar.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
};
export default Calendar;
