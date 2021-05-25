// import {
//   Link, NavLink,
// } from 'react-router-dom';
// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/personal-area/lk.png';
import api from '../../utils/Api';
import MeetingDeletePopup from '../MeetingDeletePopup/MeetingDeletePopup';

// eslint-disable-next-line no-unused-vars
function Profile(props) {
  // eslint-disable-next-line no-unused-vars
  const [userEvents, setUserEvents] = React.useState([]);
  const [isOpenPopapDeleteMeet, setIsOpenPopapDeleteMeet] = React.useState(false);
  const [meetTitle, setMeetTitle] = React.useState('');// тут переделать на выбор встречи и получать данные встречи из выбранного компонента
  const [meetTime, setMeetTime] = React.useState('');

  const handleDeleteMeetClick = (event) => {
    setMeetTitle(event.target.closest('.personal-area__card-title').content);
    setMeetTime(event.target.closest('.personal-area__card-weekday').content);
    setIsOpenPopapDeleteMeet(true);
  };

  const handleClose = (event) => {
    if (event.key === 'Escape' || event.target.classList.contains('popup_opened')) {
      setIsOpenPopapDeleteMeet(false);
    }
  };

  const handleDeleteMeet = () => {
    // eslint-disable-next-line no-console
    console.log('Meet wil be deleted');
  };
  api.getEvents()
    .then((res) => setUserEvents(res))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));

  return (
    <>
      <main className="main">
        <section className="personal-area page__section">
          <div className="personal-area__user-info">

            <button
              type="button"
              className="paragraph personal-area__user-link personal-area__user-link_type_city "
            >
              Изменить
              город
            </button>
            <Link
              to="/"
              className="paragraph personal-area__user-link personal-area__user-link_type_exit"
            >
              Выйти
            </Link>
          </div>

          <div className="personal-area__sign-up">
            <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
              У вас
              нет записи на
              мероприятия
            </h2>
          </div>

          <div className="personal-area__story">
            <h2 className="section-title personal-area__title">
              Составьте историю вашей дружбы с
              младшим. Эта страница
              доступна только вам.
            </h2>

            <article className="card-container card-container_type_personal-area">
              <div className="card personal-area__card personal-area__card_type_add-photo">

                <button className="personal-area__add-photo-button" type="button">v</button>
                <p className="caption personal-area__bottom-caption">Загрузить фото</p>
              </div>
              <div className="card personal-area__card personal-area__card_type_content">
                <form name="add-story-form" className="personal-area__form">
                  <input
                    type="text"
                    name="place"
                    placeholder="Место встречи"
                    required
                    className="personal-area__form-input"
                  />
                  <input
                    type="date"
                    name="date"
                    placeholder="Дата&emsp;"
                    required
                    className="personal-area__form-input"
                    onChange="this.className=(this.value!=''?'has-value':'')"
                  />
                  <textarea
                    type="text"
                    name="story"
                    className="personal-area__form-input personal-area__form-input_type_textarea"
                    placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
                    required
                  />

                  <div className="personal-area__rating">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      className="personal-area__rate personal-area__rate_type_good"
                      type="button"
                      aria-label="good"
                    />
                    <button
                      className="personal-area__rate personal-area__rate_type_neutral"
                      type="button"
                      aria-label="neutral"
                    />
                    <button
                      className="personal-area__rate personal-area__rate_type_bad"
                      type="button"
                      aria-label="neutral"
                    />
                    <p className="caption personal-area__rating-label">Оцените проведенное время</p>
                  </div>

                  <div className="personal-area__buttons">
                    <button
                      className="button personal-area__delete"
                      type="button"
                      onClick={handleDeleteMeetClick}
                    >
                      Удалить
                    </button>
                    <button className="button" type="submit" disabled>Добавить</button>
                  </div>
                </form>
              </div>
            </article>

            <article className="card-container card-container_type_personal-area">
              <div className="card card_content_media">
                <img src={img} alt="Катя" className="personal-area__photo" />
              </div>
              <div className="card personal-area__card personal-area__date-container">
                <div className="personal-area__text-wrap">
                  <h2 className="section-title personal-area__card-title">Парк Горького</h2>
                  <p className="paragraph">
                    Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие
                    чувства
                    вы испытывали, что
                    понравилось не понравилось. Описание в несколько срок. Подробное описание.
                    Подробное описание.
                    Опишите вашу встречу, какие чувства вы испытывали, что понравилось не
                    понравилось.
                    Описание в
                    несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы
                    испытывали, что понравилось
                    не понравилось. Описание в несколько срок. Подробное описание. Подробное
                    описание.
                    Опишите вашу
                    встречу, какие чувства вы испытывали, что понравилось не понравилось. чувства вы
                    испытывали, что
                    понравилось не понравилось.
                  </p>
                </div>
                <div className="personal-area__card-date">
                  <p className="personal-area__card-weekday">декабрь, 2020</p>
                  <p className="personal-area__card-day">05</p>
                </div>
                <div className="personal-area__actions">
                  <div className="personal-area__rating">
                    <button
                      className="personal-area__rate personal-area__rate_type_active-good"
                      type="button"
                      aria-label="active-good"
                    />
                    <p
                      className="caption personal-area__rating-label personal-area__rating-label_type_good"
                    >
                      Было
                      классно
                    </p>
                  </div>

                  <div className="personal-area__action-elements">
                    <p className="caption personal-area__opened-info">Открыто Александре К.</p>
                    <button
                      type="button"
                      className="caption personal-area__button personal-area__button_action_edit-card"
                    >
                      Редактировать
                    </button>
                    <button
                      className="caption personal-area__button personal-area__button_action_delete-card"
                      type="button"
                      onClick={handleDeleteMeetClick}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      {
        isOpenPopapDeleteMeet
      }
      &&
      <MeetingDeletePopup
        onDeleteClick={handleDeleteMeet}
        onCloseClick={handleClose}
        isOpen={isOpenPopapDeleteMeet}
        title={`${meetTitle} ${meetTime}`}
      />

      )
    </>
  );
}

export default Profile;
