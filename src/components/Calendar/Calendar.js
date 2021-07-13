/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import CalendarDescription from '../CalendarDescription/CalendarDescription';
import CalendarConfirmation from '../CalendarConfirmation/CalendarConfirmation';
import CalendarSuccessRegistration from '../CalendarSuccessRegistration/CalendarSuccessRegistration';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import MainTitle from '../MainTitle/MainTitle';
import CalendarFilter from '../CalendarFilter/CalendarFilter';
import Pagination from '../Pagination/Pagination';
import api from '../../utils/Api';
import { getAccessToken } from '../../utils/utils';
import { eventsPerPage } from '../../utils/Constants';

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
  setCalendarData,
  onPageChange,
  handleSuccessRegPopup,
  handleImmidiateBooking,
}) {
  const [months, setMonths] = React.useState([]);
  React.useEffect(() => {
    api.getEventMonths({
      token: getAccessToken(),
    })
      .then((res) => {
        setMonths(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getEvents({
      token: getAccessToken(),
      months: activeRubrics,
      limit: eventsPerPage,
      offset: 0,
    })
      .then((res) => { setCalendarData(res); });
  }, [activeRubrics]);

  return (
    <>
      <main className="main">
        <section className="lead page__section">
          <MainTitle title="Календарь" />
          { months.length > 1 && <CalendarFilter array={months} selectRubric={selectRubric} />}
        </section>
        <section className="calendar-container page__section">
          {calendarData?.results?.length > 0 && calendarData.results.map((calendar) => (
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
            />
          ))}
        </section>
        {(calendarData.count > eventsPerPage) && (
        <Pagination
          cardsLength={calendarData.count}
          cardsPerPage={eventsPerPage}
          onPageChange={onPageChange}
        />
        )}
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
        textPopupButton="Вернуться к календарю"
      />
    </>
  );
}
Calendar.propTypes = {
  calendarData: PropTypes.arrayOf(PropTypes.shape({
    booked: PropTypes.bool,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    address: PropTypes.string,
    contact: PropTypes.string,
  })).isRequired,
  setCalendarData: PropTypes.func.isRequired,
  handleImmidiateBooking: PropTypes.func.isRequired,
  handleSuccessRegPopup: PropTypes.func.isRequired,
  isConfirmationPopupOpen: PropTypes.bool.isRequired,
  isDescriptionPopupOpen: PropTypes.bool.isRequired,
  isSuccessRegPopupOpen: PropTypes.bool.isRequired,
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRubric: PropTypes.func.isRequired,
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
