import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import img from '../../images/personal-area/lk.png';

function MeetingStoryForm({
  onSubmit, onDelete, values, isExample, isEdit,
}) {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    reValidateMode: 'onBlur',
    mode: 'onTouched',
  });
  const [place, setPlace] = React.useState(
    isExample ? 'Парк горького' : values.place, // пример или данные из пропса
  );
  const [description, setDescription] = React.useState(
    isExample ? 'Опишите встречу' : values.description,
  );
  const [time, setTime] = React.useState(values.date.slice(0, 10));
  const [smile, setSmile] = React.useState(isExample ? 'good' : values.smile);
  const [photoSrc, setPhotoSrc] = React.useState(values.image);
  const [errorMessageForImage, setErrorMessageForImage] = React.useState('11');

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
    console.log(smile);
    // eslint-disable-next-line no-console
    console.log(time);
  };
  const handleSmileChange = (e) => {
    setSmile(e.target.value);
  };
  const onSubmitForm = (data) => {
    const editedData = { ...data };
    if (document.getElementById('userImage').files.length === 0) {
      delete editedData.image;
      // eslint-disable-next-line prefer-destructuring,max-len
    } else { editedData.image = data.image[0]; }// т к фото одно грузим- сразу выставляем первый эл-т из массива FileList
    onSubmit(editedData);
  };
  function checkSizeImage(size) {
    if (size > 10485760) {
      setErrorMessageForImage('Файл в формате jpeg/png/gif и размером не более 10мб');
      return false;
    }
    return true;
  }
  function checkTypeImage(type) {
    console.log(type);
    if (type !== ('image/jpeg' || 'image/png' || 'image/gif' || 'image/jpg')) {
      setErrorMessageForImage('Файл в формате jpeg/png/gif и размером не более 10мб');
      return false;
    }
    return true;
  }
  const handleLoadImage = (e) => {
    // eslint-disable-next-line max-len
    console.log(e.target.files[0], checkSizeImage(e.target.files[0].size), checkTypeImage(e.target.files[0].type));
    if (checkSizeImage(e.target.files[0].size)) {
      if (checkTypeImage(e.target.files[0].type)) {
        setErrorMessageForImage('');
        setPhotoSrc(window.URL.createObjectURL(e.target.files[0]));
      }
    } else {
      setErrorMessageForImage('Файл в формате jpeg/png/gif и размером не более 10мб');
    }
  };

  // граничные значения для инпута даты
  const nowDate = new Date().toISOString().substring(0, 10);
  const oldDate = new Date(2010, 12, 31).toISOString().substring(0, 10);

  // установка реакции при редактировании
  React.useEffect(() => {
    if (values.smile !== '') {
      const reactionLists = Array.from(
        document.querySelectorAll('.personal-area__radioBtn-smile'),
      );
      reactionLists.forEach((input) => {
        /* eslint no-param-reassign:
      ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^input"] }] */
        if (input.id === values.smile) input.checked = true;
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
        {photoSrc !== '' && (
        <img
          src={photoSrc}
          alt={photoSrc?.substring(photoSrc.lastIndexOf('/') + 1, photoSrc.lastIndexOf('.')) || '#'}
          className="personal-area__card_photo"
        />
        )}
        <input
          className="personal-area__add-photo-button"
          type="file"
          id="userImage"
          accept="image/jpeg, image/png, image/gif"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('image')}
          onChange={handleLoadImage}
        />
        <label
          htmlFor="userImage"
          className="caption personal-area__bottom-caption"
        />
        <p className="personal-area__form-input_error_type-input">{errorMessageForImage}</p>
      </div>
      <div className="card personal-area__card personal-area__card_type_content">
        <div className="personal-area__form">
          <div className="personal-area__form-input_wrap">
            <input
              type="text"
              placeholder="Место встречи"
              className="personal-area__form-input personal-area__form-input_type_place"
              id="place"
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('place', { required: true, maxLength: 50, minLength: 2 })}
              value={place}
              onChange={handlePlaceChange}
            />
            {errors.place && errors.place.type === 'required' && <p className="personal-area__form-input_error">Поле необходимо заполнить</p>}
            {errors.place && errors.place.type === 'maxLength' && <p className="personal-area__form-input_error">Максимум 50 символов</p> }
            {errors.place && errors.place.type === 'minLength' && <p className="personal-area__form-input_error">Минимум 2 символа</p> }
          </div>
          <div className="personal-area__form-input_wrap_data">
            <input
              type="date" // здесь выбор даты
              placeholder=""
              className="personal-area__form-input personal-area__form-input_type_data"
              onInput={handleTimeChange}
              id="date"
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('date', {
                required: true,
                min: oldDate,
                max: nowDate,
              })}
              value={time}
            />
            {errors.date && errors.date.type === 'required' && <p className="personal-area__form-input_error">Поле необходимо заполнить</p>}
            {errors.date && errors.date.type === 'min' && <p className="personal-area__form-input_error">Нужна правильная дата</p> }
            {errors.date && errors.date.type === 'max' && <p className="personal-area__form-input_error">Нужна правильная дата</p> }
          </div>
          <div className=" personal-area__form-input_wrap_type_textarea">
            <textarea
              className="personal-area__form-input personal-area__form-input_type_textarea"
              placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
              maxLength={5000}
              id="description"
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('description', { required: true, maxLength: 5000, minLength: 2 })}
              value={description}
              onChange={handleDescriptionChange}
            />
            {errors.description && errors.description.type === 'required' && <p className="personal-area__form-input_error">Поле необходимо заполнить</p>}
            {errors.description && errors.description.type === 'minLength' && <p className="personal-area__form-input_error">Минимум 2 символа</p> }
          </div>
          <div className="personal-area__rating">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('smile', { required: true })}
              type="radio"
              id="good"
              value="good"
              className="personal-area__radioBtn-smile"
              onChange={handleSmileChange}

            />
            <label
              htmlFor="good"
              className="personal-area__rate personal-area__rate_type_good"
              aria-label="good"
              title="Было классно"
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('smile', { required: true })}
              type="radio"
              name="smile"
              id="neutral"
              value="neutral"
              className="personal-area__radioBtn-smile"
              // onChange={handleChangeReaction}
              onChange={handleSmileChange}

            />
            <label
              htmlFor="neutral"
              className="personal-area__rate personal-area__rate_type_neutral"
              aria-label="neutral"
              title="Хорошо"
            />
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('smile', { required: true })}
              type="radio"
              name="smile"
              id="bad"
              value="bad"
              className="personal-area__radioBtn-smile"
              onChange={handleSmileChange}

            />
            <label
              className="personal-area__rate personal-area__rate_type_bad"
              htmlFor="bad"
              aria-label="bad"
              title="Бывает и лучше"
            />
            <p className="caption personal-area__rating-label">
              Оцените проведенное время
              {' '}
              {errors.smile && errors.smile.type === 'required' && <span className="personal-area__form-input_error">&lt;--------------</span>}
            </p>

          </div>

          <div className="personal-area__buttons">
            <button
              className="button personal-area__delete"
              type="button"
              onClick={onDelete}
              disabled={!!isExample}
            >
              Отменить
            </button>
            <button className="button personal-area__save" type="submit" disabled={!!isExample}>
              {isEdit ? 'Сохранить' : 'Добавить'}
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
    place: '',
    description: '',
    date: '',
    smile: '',
    sendToCurator: false,
    image: '',
    name: '',
  },
  isEdit: false,
};

MeetingStoryForm.propTypes = {
  isExample: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  values: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    place: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    smile: PropTypes.string,
    image: PropTypes.string,
    sendToCurator: PropTypes.bool,
    name: PropTypes.string,
  }),
  isEdit: PropTypes.bool,
};

export default MeetingStoryForm;
