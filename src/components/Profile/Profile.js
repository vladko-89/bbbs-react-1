import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../utils/Api';
import MeetingDeletePopup from '../MeetingDeletePopup/MeetingDeletePopup';
// import PopupCities from '../PopupCities/PopupCities';
import EventInProfile from '../EventInProfile/EventInProfile';
import mockMeetingStories from '../../utils/mockMeetigsStories.json';
import MeetingStoryForm from '../MeetingStoryForm/MeetingStoryForm';
import MeetingStoryArticle from '../MeetingStoryArticle/MeetingStoryArticle';
// import { citiesList } from '../../utils/Constants';
// import { CurrentUser } from "../../contexts/CurrentUser";

// eslint-disable-next-line no-unused-vars
function Profile({ onOutClick }) {
  // const user = React.useContext(CurrentUser);
  // eslint-disable-next-line no-console
  // console.log(user);
  // eslint-disable-next-line no-unused-vars
  const [userEvents, setUserEvents] = React.useState([]);// события календаря
  const [userMeetings, setUserMeetings] = React.useState([]);
  const [selectedMeetings, setSelectedMeetings] = React.useState({});
  const [isOpenPopupDeleteMeet, setIsOpenPopupDeleteMeet] = React.useState(
    () => !!userMeetings.length > 0,
  );
  // const [isOpenPopupCities, setIsOpenPopupCities] = React.useState(false);
  // const [city, setCity] = React.useState('');
  const [isHidden, setIsHidden] = React.useState(false);
  const [meetTitle, setMeetTitle] = React.useState(''); // тут переделать на выбор встречи и получать данные встречи из выбранного компонента
  const [meetTime, setMeetTime] = React.useState('');

  React.useEffect(() => {
    // api.getUserInfo()
    //   .then((res) => {
    //     setCity(citiesList[res[0].city]);
    //     // eslint-disable-next-line no-console
    //     console.log(res);
    //   })
    //   // eslint-disable-next-line no-console
    //   .catch((err) => console.log(err));
    api
      .getEvents()
      .then((res) => setUserEvents(res.filter((el) => el.booked === true)))
      .then(() => {
        setUserMeetings(mockMeetingStories);
        if (mockMeetingStories.length > 0) {
          setIsHidden(true);
        }
      })
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
      // setIsOpenPopupCities(false);
    }
    setIsOpenPopupDeleteMeet(false);
    // setIsOpenPopupCities(false);
  };

  const handleDeleteMeet = () => {
    setUserMeetings(// пока по названию, будет бэк-возьмем id
      userMeetings.filter((meet) => meet.title !== selectedMeetings.title),
    );
    setIsHidden(true);
    // eslint-disable-next-line no-console
    console.log('Meet wil be deleted');
  };
  // const handleChangeCityClick = () => {
  //   setIsOpenPopupCities(true);
  // };
  //
  // const handleChangeCity = (place) => {
  //   setCity(place);
  //   // eslint-disable-next-line no-console
  //   console.log(`city changed on ${place}`);
  //   // дописать обновление юзер инфо
  //   // const num = citiesList.indexOf(place);
  //   // api.updateUserInfo({ user: 0, city: num })
  //   //   .then((res) => { setCity(citiesList[res[0].city]); })
  //   //   // eslint-disable-next-line no-console
  //   //   .catch((err) => console.log(err));
  // };
  const handleSubmitStory = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.id = Math.random() * 10; // Временная заглушка для id, иначе проблема с выводом элементов
    setUserMeetings([data, ...userMeetings]);
    setIsHidden(true);
    // eslint-disable-next-line no-console
    console.log('handle submite in profile', data);
  };
  const handleAddMeetClick = () => {
    setIsHidden(false);
  };
  return (
    <>
      <main className="main">
        <section className="personal-area page__section">
          {/* <div className="personal-area__user-info"> */}
          {/*  <button */}
          {/*    type="button" */}
          {/*    className="personal-area__user-link personal-area__user-link_type_city " */}
          {/*    onClick={handleChangeCityClick} */}
          {/*  >  */}
          {/*    {`${city}. Изменить город`} */}
          {/*  </button> */}
          {/*  <Link */}
          {/*    to="/" */}
          {/*    className="personal-area__user-link personal-area__user-link_type_exit" */}
          {/*    onClick={onOutClick} */}
          {/*  > */}
          {/*    Выйти */}
          {/*  </Link> */}
          {/* </div>* /} */}
          <div className="personal-area__sign-up">
            <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
              {userEvents.length > 0
                ? 'Вы записаны на мероприятия:'
                : 'У вас нет записи на мероприятия'}
            </h2>
            {userEvents.length > 0 && <EventInProfile events={userEvents} />}
          </div>

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
                    onDeleteForSubmit={handleDeleteMeet}
                    story={item}
                  />
                ))
              )}
            </section>
          </div>
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
      {/* {{ isOpenPopupCities } && ( */}
      {/*  <PopupCities */}
      {/*    // onChangeCities={handleChangeCity} */}
      {/*    onCloseClick={handleClose} */}
      {/*    isOpen={isOpenPopupCities} */}
      {/*    isCity={city} */}
      {/*  /> */}
      {/* )} */}

    </>
  );
}

Profile.propTypes = {
  onOutClick: PropTypes.func.isRequired,
};

export default Profile;
