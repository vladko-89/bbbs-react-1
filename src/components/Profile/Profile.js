import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../utils/Api';
import MeetingDeletePopup from '../MeetingDeletePopup/MeetingDeletePopup';
import EventInProfile from '../EventInProfile/EventInProfile';
// import mockMeetingStories from '../../utils/mockMeetigsStories.json';
import MeetingStoryForm from '../MeetingStoryForm/MeetingStoryForm';
import MeetingStoryArticle from '../MeetingStoryArticle/MeetingStoryArticle';
import { getAccessToken } from '../../utils/utils';
import CalendarDescription from '../CalendarDescription/CalendarDescription';
import Preloader from '../Preloader/Preloader';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function Profile({ user, handleImmidiateBooking }) {
  const [userEvents, setUserEvents] = React.useState([]);// события календаря
  const [userMeetings, setUserMeetings] = React.useState([]);
  const [selectedMeetings, setSelectedMeetings] = React.useState({});
  const [isOpenPopupDeleteMeet, setIsOpenPopupDeleteMeet] = React.useState(
    () => !!userMeetings.length > 0,
  );
  const [isDescriptionPopupOpen, setIsDescriptionPopupOpen] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState({ startAt: '2000-01-01T00:00:00Z', endAt: '2000-01-01T00:00:00Z' });
  const [isHidden, setIsHidden] = React.useState(false);
  const [meetTitle, setMeetTitle] = React.useState('');
  const [meetTime, setMeetTime] = React.useState('');
  const [isDataReady, setIsDataReady] = React.useState(false);

  const handleUnsubscribe = () => {
    handleImmidiateBooking(currentEvent);
    api
      .getEvents(getAccessToken())
      .then((res) => {
        console.log('res', res);
        setUserEvents(userEvents.filter((el) => el.id !== currentEvent.id));
      });
    setIsDescriptionPopupOpen(false);
  };

  React.useEffect(() => {
    const accessToken = getAccessToken();
    api
      .getEvents(accessToken)
      .then((res) => setUserEvents(res.results.filter((el) => el.booked === true)))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
    api.getMeetingStories(accessToken)
      .then((res) => {
        setUserMeetings(res.results);
        if (res.results.length > 0) {
          setIsHidden(true);
        }
      })
      .then(() => setIsDataReady(true))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [user]);
  // eslint-disable-next-line no-console
  console.log(userMeetings);
  // eslint-disable-next-line no-console
  console.log(selectedMeetings);
  const handleEditClick = (meeting) => {
    setSelectedMeetings(meeting);
    setIsHidden(true);
  };
  const handleDeleteMeetClick = (time, meeting) => {
    setSelectedMeetings(meeting);
    setMeetTitle(
      meeting.place,
    );
    // eslint-disable-next-line no-console
    console.log(selectedMeetings);
    setMeetTime(
      time,
    );
    setIsOpenPopupDeleteMeet(true);
  };

  const handleClose = (event) => {
    if (
      event.key === 'Escape' || event.target.classList.contains('popup_opened')
    ) {
      setIsOpenPopupDeleteMeet(false);
      setIsDescriptionPopupOpen(false);
    }
    setIsOpenPopupDeleteMeet(false);
    setIsDescriptionPopupOpen(false);
  };

  const handleDeleteMeet = () => {
    api.deleteMeetingStory(getAccessToken(), selectedMeetings.id)
      .then(() => {
        setUserMeetings(
          userMeetings.filter((meet) => meet.id !== selectedMeetings.id),
        );
      })
      .catch((err) => console.log(err));
    setIsHidden(true);
    // eslint-disable-next-line no-console
    console.log('Meet wil be deleted');
  };

  const handleCancelForm = () => {
    setIsHidden(true);
  };

  const handleSubmitStory = (data) => {
    setIsDataReady(false);
    api.postMeetingStories(getAccessToken(), data)
      .then((res) => {
        console.log(res);
        setUserMeetings([res, ...userMeetings]);
        setIsHidden(true);
      })
      .catch((err) => console.log(err))
      .finally(setIsDataReady(true));
    // eslint-disable-next-line no-console
    console.log('handle submite in profile', data);
  };

  const handleSubmitEditStory = (data) => {
    setIsDataReady(false);
    api.editMeetingStory(getAccessToken(), data)
      .then((res) => {
        setUserMeetings([...userMeetings.map((el) => (el.id !== res.id ? el : res))]);
        return res;
      })
      .catch((err) => console.log(err))
      .finally(setIsDataReady(true));
    setIsHidden(true);
    // eslint-disable-next-line no-console
    console.log('handle submite in profile', data);
  };
  const handleAddMeetClick = () => {
    setIsHidden(false);
  };
  const handleEventClick = (item) => {
    setCurrentEvent(item);
    setIsDescriptionPopupOpen(true);
    console.log(item);
  };

  React.useEffect(() => {
    if (userMeetings.length === 0) setIsHidden(false);
  }, [userMeetings]);
  return (
    isDataReady
      ? (
        <>
          <main className="main">
            <section className="personal-area page__section">
              <div className="personal-area__sign-up">
                <h2 className="personal-area__title personal-area__title_type_sign-up">
                  {userEvents.length > 0
                    ? 'Вы записаны на мероприятия:'
                    : 'У вас нет записи на мероприятия'}
                </h2>
                {userEvents.length > 0
                && (
                  <ErrorBoundary>
                    <EventInProfile events={userEvents} openEventDescription={handleEventClick} />
                  </ErrorBoundary>
                )}
              </div>
              <ErrorBoundary>
                <div className="personal-area__story">
                  {userMeetings.length === 0 && (
                    <h2 className="personal-area__title">
                      Составьте историю вашей дружбы с младшим. Эта страница доступна
                      только вам.
                    </h2>
                  )}
                  {userMeetings.length > 0 && (
                    <button
                      type="button"
                      className="meeting__add opacity-transition"
                      onClick={handleAddMeetClick}
                    >
                      Добавить встречу
                    </button>
                  )}
                  {!isHidden && (
                    <MeetingStoryForm
                      onSubmit={handleSubmitStory}
                      onDelete={handleCancelForm}
                      isExample={false}
                    />
                  )}

                  <section className="stories-container">
                    {userMeetings.length === 0 ? (
                      <MeetingStoryForm
                        onSubmit={handleSubmitStory}
                        onDelete={handleCancelForm}
                        isExample
                      />
                    ) : (
                      userMeetings.map((item) => (
                        <MeetingStoryArticle
                          key={item.id}
                          onEdit={handleEditClick}
                          onEditSubmit={handleSubmitEditStory}
                          onDelete={handleDeleteMeetClick}
                          onDeleteForSubmit={handleDeleteMeet}
                          story={item}
                        />
                      ))
                    )}
                  </section>
                </div>
              </ErrorBoundary>
            </section>
          </main>
          {{ isOpenPopupDeleteMeet } && (
            <MeetingDeletePopup
              onDeleteClick={handleDeleteMeet}
              onCloseClick={handleClose}
              story={selectedMeetings}
              isOpen={isOpenPopupDeleteMeet}
              title={`${meetTitle} ${meetTime}`}
            />
          )}
          {{ isDescriptionPopupOpen } && (
            <CalendarDescription
              currentEvent={currentEvent}
              onClose={handleClose}
              isOpen={isDescriptionPopupOpen}
              onActionClick={handleUnsubscribe}
            />
          )}
        </>
      )
      : <Preloader />
  );
}
Profile.propTypes = {

};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
    city: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPrimary: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  handleImmidiateBooking: PropTypes.func.isRequired,
};
