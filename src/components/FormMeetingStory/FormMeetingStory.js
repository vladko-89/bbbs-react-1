import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';

function FormMeetingStory(props) {
  const [placeName, setPlaceName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [reaction, setReaction] = React.useState('none');
  const handleChangePlaceName =(e)=>{
    setPlaceName(e.target.value)
  }
  const handleChangeDate=(e)=>{
    setDate(e.target.value);
  }
  const handleChangeDescription= (e)=>{
    setDescription(e.target.value)
  }
  const handleChooseReaction =(e)=>{
    setReaction(e.target.name)
  }

  const onSubmit = (e)=>{
    e.preventDefault();

  }

  const handleDeleteMeetClick =()=>{
    forms.reset()
  }

  return (
    <form className="card-container card-container_type_personal-area" onSubmit={onSubmit}>
      <div className="card personal-area__card personal-area__card_type_add-photo">

        <input type="file" className="personal-area__add-photo-button" name={'image'} id={'image'}
               required onChange={}/>
        <label htmlFor={'image'} className="caption personal-area__bottom-caption">Загрузить
          фото</label>
      </div>
      <div className="card personal-area__card personal-area__card_type_content">
        <div className="personal-area__form">
          <input
            type="text"
            name="place"
            placeholder="Место встречи"
            required
            className="personal-area__form-input"
            value={placeName}
            onChange={handleChangePlaceName}
          />
          <input
            type="date"
            name="date"
            placeholder="Дата&emsp;"
            required
            className="personal-area__form-input"
            value={date}
            onChange={handleChangeDate}
          />
          <textarea
            type="text"
            name="story"
            className="personal-area__form-input personal-area__form-input_type_textarea"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
            required
            value={description}
            onChange={handleChangeDescription}
          />

          <div className="personal-area__rating">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              className={`personal-area__rate personal-area__rate_type_good ${reaction==='good'?"personal-area__rate_type_active-good":""}`}
              type="button"
              aria-label="good"
              name={'good'}
              onClick={handleChooseReaction}
            />
            <button
              className={`personal-area__rate personal-area__rate_type_neutral ${reaction==='neutral'?"personal-area__rate_type_active-neutral":""}`}
              type="button"
              aria-label="neutral"
              name={'neutral'}
              onClick={handleChooseReaction}
            />
            <button
              className={`personal-area__rate personal-area__rate_type_bad ${reaction==='bad'?"personal-area__rate_type_active-bad":""} `}
              type="button"
              aria-label="bad"
              name={'bad'}
              onClick={handleChooseReaction}
            />
            <p className="caption personal-area__rating-label">Оцените проведенное время</p>
          </div>

          <div className="personal-area__buttons">
            <button
              className="button personal-area__delete"
              type="button"
              onClick={handleDeleteMeetClick}
              disabled
            >
              Удалить
            </button>
            <button className="button" type="submit" disabled>Добавить</button>
          </div>
        </div>
      </div>
    </form>
  );
}

FormMeetingStory.propTypes = {
  onOutClick: PropTypes.func.isRequired,
};
export default FormMeetingStory;
