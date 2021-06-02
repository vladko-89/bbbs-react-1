import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function MeetingStoryForm({ onSubmit, onDelete, isExample }) {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (e, data) => {
    e.preventDefault();
    onSubmit(data);
  };
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
          {...register('userImage')}
        />

        <label
          htmlFor="userImage"
          className="caption personal-area__bottom-caption"
        >
          Загрузить фото
        </label>
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
            {...register('place')}
            value={isExample ? 'Парк горького' : ''}
          />
          <input
            type="date"
            placeholder="Дата&emsp;"
            required
            className="personal-area__form-input"
            onChange="this.className=(this.value!=''?'has-value':'')"
            id="date"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('date')}
            value={isExample ? '05-05-2021' : ''}
          />
          <textarea
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
            required
            id="story"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('story')}
            value={isExample ? 'Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось' : ''}
          />

          <div className="personal-area__rating">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <input
              type="radio"
              name="mood"
              id="good"
              value="good"
              className="personal-area__radioBtn-mood"
              checked={!!isExample}
            />
            <label
              htmlFor="good"
              className="personal-area__rate personal-area__rate_type_good"
              aria-label="good"
            />
            <input
              type="radio"
              name="mood"
              id="neutral"
              value="neutral"
              className="personal-area__radioBtn-mood"
            />
            <label
              htmlFor="neutral"
              className="personal-area__rate personal-area__rate_type_neutral"
              aria-label="neutral"
            />
            <input
              type="radio"
              name="mood"
              id="bad"
              value="bad"
              className="personal-area__radioBtn-mood"
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
              Удалить
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

MeetingStoryForm.propTypes = {
  isExample: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MeetingStoryForm;
