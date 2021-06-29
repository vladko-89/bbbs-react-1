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
// import { CalendarContext } from "../../contexts/CalendarContext";

function Calendar({
  activeRubrics,
  selectRubric,
  onBooking,
  onDescription,
  onCancel,
  onClose,
  currentEvent,
  isConfirmationPopupOpen,
  isDescriptionPopupOpen,
  isSuccessRegPopupOpen,
  calendarData,
  handleSuccessRegPopup,
  handleImmidiateBooking,
}) {
  const filterArray = [];
  const parsedCalendarData = calendarData.map((el) => ({
    name: format(new Date(el.startAt), 'LLLL', { locale: ruLocale }),
    slug: format(new Date(el.startAt), 'LLLL', { locale: ruLocale }),
  }));
  parsedCalendarData.forEach((el) => { if (!filterArray.some((item) => item.name === el.name)) { filterArray.push(el); } });

  React.useEffect(() => {
    selectRubric('All', true);
  }, []);

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
              onBooking={onBooking}
              onDescription={onDescription}
              onCancel={onCancel}
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
        onClose={onClose}
        handleSuccessRegClick={handleSuccessRegPopup}
        currentEvent={currentEvent}
      />
      <CalendarDescription
        isOpen={isDescriptionPopupOpen}
        onClose={onClose}
        onActionClick={handleImmidiateBooking}
        currentEvent={currentEvent}
      />
      <CalendarSuccessRegistration
        isOpen={isSuccessRegPopupOpen}
        handleCloseSuccessRegPopup={onClose}
        currentEvent={currentEvent}
      />
    </>
  );
}
Calendar.propTypes = {
  calendarData: PropTypes.arrayOf.isRequired,
  handleImmidiateBooking: PropTypes.func.isRequired,
  handleSuccessRegPopup: PropTypes.func.isRequired,
  isConfirmationPopupOpen: PropTypes.bool.isRequired,
  isDescriptionPopupOpen: PropTypes.bool.isRequired,
  isSuccessRegPopupOpen: PropTypes.bool.isRequired,
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  onBooking: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDescription: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  currentEvent: PropTypes.shape({
    booked: PropTypes.bool,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    address: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
};
export default Calendar;
