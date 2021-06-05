import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { format, parseISO } from 'date-fns';

function MeetingStoryForm({ onSubmit, onDelete, values }) {
  const { register, handleSubmit } = useForm();
  const [place, setPlace] = React.useState(values.title);
  const [description, setDescription] = React.useState(values.description);
  const [time, setTime] = React.useState(() => format(parseISO(values.data), 'yyyy-MM-dd'));
  const [mood, setMood] = React.useState(values.mood);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };
  const onSubmitForm = (data) => {
    onSubmit(data);
    // eslint-disable-next-line no-console
    console.log(time);
    // eslint-disable-next-line no-console
    console.log(mood);
  };
  // const handleChangeReaction = (e) => {
  //    // e.target.nextSibling.classList.toggle(`personal-area__rate_type_active-${e.target.id}`);
  //   if (e.target.checked === true) { // если включаем чекбокс
  //     const btnRate = document.querySelectorAll('.personal-area__radioBtn-mood');
  //     for (let i = 0; i < btnRate.length; i += 1) { // проходим по всем чекбоксам
  //       btnRate[i].checked = false; // выключаем их
  //     }
  //     e.target.checked = true; // и включаем текущий (потому что до этого выключили все)
  //   }
  // };
  return (
    <form
      className="card-container card-container_type_personal-area"
      name="add-story-form"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="card personal-area__card personal-area__card_type_add-photo">
        <input
          className="personal-area__add-photo-button"
          type="file"
          accept="image/jpeg, image/png, image/gif"
          id="userImage"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('image')}

        />

        <label
          htmlFor="userImage"
          className="caption personal-area__bottom-caption"
        />
      </div>
      <div className="card personal-area__card personal-area__card_type_content">
        <div className="personal-area__form">
          <input
            type="text"
            placeholder="Место встречи"
            required
            className="personal-area__form-input"
            id="place"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('title')}
            value={place}
            onChange={handlePlaceChange}
          />
          <input
            type="date"
            placeholder="Дата&emsp;"
            required
            className="personal-area__form-input"
            onChange={handleTimeChange}
            id="date"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('date')}
            value={time}

          />
          <textarea
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
            required
            id="story"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('story')}
            value={description}
            onChange={handleDescriptionChange}
          />

          <div className="personal-area__rating">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('mood')}
              type="radio"
              id="good"
              value="good"
              className="personal-area__radioBtn-mood"
              onChange={handleMoodChange}
            />
            <label
              htmlFor="good"
              className="personal-area__rate personal-area__rate_type_good"
              aria-label="good"
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('mood')}
              type="radio"
              name="mood"
              id="neutral"
              value="neutral"
              className="personal-area__radioBtn-mood"
              // onChange={handleChangeReaction}
              onChange={handleMoodChange}
            />
            <label
              htmlFor="neutral"
              className="personal-area__rate personal-area__rate_type_neutral"
              aria-label="neutral"
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('mood')}
              type="radio"
              name="mood"
              id="bad"
              value="bad"
              className="personal-area__radioBtn-mood"
              // onChange={handleChangeReaction}
              onChange={handleMoodChange}
            />
            <label
              className="personal-area__rate personal-area__rate_type_bad"
              htmlFor="bad"
              aria-label="neutral"
            />
            <p className="caption personal-area__rating-label">
              Оцените проведенное время
            </p>
          </div>

          <div className="personal-area__buttons">
            <button
              className="button personal-area__delete"
              type="button"
              onClick={onDelete}
            >
              Отменить
            </button>
            <button className="button" type="submit">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

MeetingStoryForm.defaultProps = {
  values: {
    id: '',
    title: '',
    description: '',
    date: '',
    mood: '',
    shared: '',
    image: '',
  },
};

MeetingStoryForm.propTypes = {

  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string, PropTypes.number, PropTypes.bool),
};

export default MeetingStoryForm;
