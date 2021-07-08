import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function MeetingStoryForm({
  onSubmit, onDelete, values, isExample,
}) {
  const { register, handleSubmit } = useForm();
  const [place, setPlace] = React.useState(
    isExample ? 'Парк горького' : values.title, // пример или данные из пропса
  );
  const [description, setDescription] = React.useState(
    isExample ? 'Опишите встречу' : values.description,
  );
  const [time, setTime] = React.useState(values.date.slice(0, 10));
  const [mood, setMood] = React.useState(isExample ? 'good' : values.mood);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  // Время
  const handleTimeChange = (e) => {
    setTime(e.target.value);
    // eslint-disable-next-line no-console
    console.log(mood);
    // eslint-disable-next-line no-console
    console.log(time);
  };
  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };
  const onSubmitForm = (data) => {
    onSubmit(data);
  };
  const handleLoadImage = (e) => {
    const container = document.querySelector(
      '.personal-area__card_type_add-photo',
    );
    const img = document.createElement('img');
    img.src = window.URL.createObjectURL(e.target.files[0]);
    img.width = 400;
    // eslint-disable-next-line
    img.onload = function () {
      window.URL.revokeObjectURL(img.src);
    };
    container.appendChild(img);
  };
  // установка реакции при редактировании
  React.useEffect(() => {
    if (values.mood !== '') {
      const reactionLists = Array.from(
        document.querySelectorAll('.personal-area__radioBtn-mood'),
      );
      reactionLists.forEach((input) => {
        /* eslint no-param-reassign:
      ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^input"] }] */
        if (input.id === values.mood) input.checked = true;
      });
    }
    if (values.image === null) {
      setPhotoSrc('');
    } else { setPhotoSrc(values.image); }
  }, []);
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
          onChange={handleLoadImage}
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
            type="date" // здесь выбор даты
            placeholder=""
            required
            className="personal-area__form-input"
            onInput={handleTimeChange}
            id="date"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('date')}
            value={time}
          />
          <textarea
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
            required
            id="description"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('description')}
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
              required
            />
            <label
              htmlFor="good"
              className="personal-area__rate personal-area__rate_type_good"
              aria-label="good"
              title="Было классно"
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
              required
            />
            <label
              htmlFor="neutral"
              className="personal-area__rate personal-area__rate_type_neutral"
              aria-label="neutral"
              title="Хорошо"
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('mood')}
              type="radio"
              name="mood"
              id="bad"
              value="bad"
              className="personal-area__radioBtn-mood"
              onChange={handleMoodChange}
              required
            />
            <label
              className="personal-area__rate personal-area__rate_type_bad"
              htmlFor="bad"
              aria-label="bad"
              title="Бывает и лучше"
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
  isExample: false,
  values: {
    id: 0,
    title: '',
    description: '',
    date: '',
    mood: '',
    shared: false,
    image: '',
  },
};

MeetingStoryForm.propTypes = {
  isExample: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  values: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    mood: PropTypes.string,
    shared: PropTypes.bool,
    image: PropTypes.string,
  }),
};

export default MeetingStoryForm;
