import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../utils/Api';
import MeetingDeletePopup from '../MeetingDeletePopup/MeetingDeletePopup';
import PopupCities from '../PopupCities/PopupCities';
import EventInProfile from '../EventInProfile/EventInProfile';
import mockMeetingStories from '../../utils/mockMeetigsStories.json';
import MeetingStoryForm from '../MeetingStoryForm/MeetingStoryForm';
import MeetingStoryArticle from '../MeetingStoryArticle/MeetingStoryArticle';

// eslint-disable-next-line no-unused-vars
function Profile({ onOutClick }) {
  // eslint-disable-next-line no-unused-vars
  const [userEvents, setUserEvents] = React.useState([]);
  const [userMeetings, setUserMeetings] = React.useState([]);
  const [selectedMeetings, setSelectedMeetings] = React.useState({});
  const [isOpenPopupDeleteMeet, setIsOpenPopupDeleteMeet] = React.useState(false);
  const [isOpenPopupCities, setIsOpenPopupCities] = React.useState(false);
  const [meetTitle, setMeetTitle] = React.useState(''); // тут переделать на выбор встречи и получать данные встречи из выбранного компонента
  const [meetTime, setMeetTime] = React.useState('');

  React.useEffect(() => {
    api
      .getEvents()
      .then((res) => setUserEvents(res.filter((el) => el.booked === true)))
      .then(() => setUserMeetings(mockMeetingStories))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);
  // eslint-disable-next-line no-console
  console.log(userMeetings);
  // eslint-disable-next-line no-console
  console.log(selectedMeetings);
  const handleEditClick = (meeting) => {
    setSelectedMeetings(meeting);
  };
  const handleDeleteMeetClick = (time, meeting) => {
    setSelectedMeetings(meeting);
    setMeetTitle(
      meeting.title,
      // event.target
      //   .closest('.card-container_type_personal-area')
      //   .querySelector('.personal-area__card-title').textContent,
    );
    // eslint-disable-next-line no-console
    console.log(selectedMeetings);
    setMeetTime(
      time,
      // event.target
      //   .closest('.card-container_type_personal-area')
      //   .querySelector('.personal-area__card-weekday').textContent,
    );
    setIsOpenPopupDeleteMeet(true);
  };

  const handleClose = (event) => {
    if (
      event.key === 'Escape' || event.target.classList.contains('popup_opened')
    ) {
      setIsOpenPopupDeleteMeet(false);
      setIsOpenPopupCities(false);
    }
    setIsOpenPopupDeleteMeet(false);
    setIsOpenPopupCities(false);
  };

  const handleDeleteMeet = () => {
    setUserMeetings(
      userMeetings.filter((meet) => meet.title !== selectedMeetings.title),
    );
    setMeetTitle('');
    setMeetTime('');
    // eslint-disable-next-line no-console
    console.log('Meet wil be deleted');
  };
  const handleChangeCityClick = () => {
    setIsOpenPopupCities(true);
  };

  const handleChangeCity = (city) => {
    // eslint-disable-next-line no-console
    console.log(`city changed on ${city}`);
  };
  const handleSubmitStory = (data) => {
    setUserMeetings([...userMeetings, data]);
    // eslint-disable-next-line no-console
    console.log(`saving story ${data}`);
  };

  return (
    <>
      <main className="main">
        <section className="personal-area page__section">
          <div className="personal-area__user-info">
            <button
              type="button"
              className="paragraph personal-area__user-link personal-area__user-link_type_city "
              onClick={handleChangeCityClick}
            >
              Изменить город
            </button>
            <Link
              to="/"
              className="paragraph personal-area__user-link personal-area__user-link_type_exit"
              onClick={onOutClick}
            >
              Выйти
            </Link>
          </div>

          <div className="personal-area__sign-up">
            <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
              {userEvents.length > 0
                ? 'Вы записаны на мероприятия:'
                : 'У вас нет записи на мероприятия'}
            </h2>
            {userEvents.length > 0 && <EventInProfile events={userEvents} />}
          </div>

          <div className="personal-area__story">
            {mockMeetingStories.length === 0 && (
              <h2 className="section-title personal-area__title">
                Составьте историю вашей дружбы с младшим. Эта страница
                доступна только вам.
              </h2>
            ) && (
              <MeetingStoryForm
                onSubmit={handleSubmitStory}
                onDelete={handleDeleteMeet}
                isExample={false}
              />
            )}
            <section className="stories-container">
              {userMeetings.length === 0 ? (
                <MeetingStoryForm
                  onSubmit={handleSubmitStory}
                  onDelete={handleDeleteMeet}
                  isExample
                />
              ) : (
                userMeetings.map((item) => (
                  <MeetingStoryArticle
                    key={item.id}
                    onEdit={handleEditClick}
                    onEditSubmit={handleSubmitStory}
                    onDelete={handleDeleteMeetClick}
                    story={item}
                  />
                ))
              )}
            </section>
          </div>
        </section>
      </main>
      {isOpenPopupDeleteMeet}
      &&
      <MeetingDeletePopup
        onDeleteClick={handleDeleteMeet}
        onCloseClick={handleClose}
        story={selectedMeetings}
        isOpen={isOpenPopupDeleteMeet}
        title={`${meetTitle} ${meetTime}`}
      />
      {{ isOpenPopupCities } && (
        <PopupCities
          onChangeCities={handleChangeCity}
          onCloseClick={handleClose}
          isOpen={isOpenPopupCities}
        />
      )}
      )
    </>
  );
}

Profile.propTypes = {
  onOutClick: PropTypes.func.isRequired,
};

export default Profile;
