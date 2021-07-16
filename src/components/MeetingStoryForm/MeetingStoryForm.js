import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import img from '../../images/personal-area/lk.png';

function MeetingStoryForm({
  onSubmit, onDelete, values, isEdit,
}) {
  const {
    register, handleSubmit, setError, clearErrors, setFocus, formState: { errors, isValid },
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });
  const [place, setPlace] = React.useState(values.place);
  const [description, setDescription] = React.useState(values.description);
  const [time, setTime] = React.useState(values.date);
  const [smile, setSmile] = React.useState(values.smile);
  const [photoSrc, setPhotoSrc] = React.useState(values.image);
  const [errorMessageForImage, setErrorMessageForImage] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [textReaction, setTextReaction] = React.useState('');
  const fileLoad = React.useRef();

  React.useEffect(() => {
    if (isEdit) setFocus('place');
  }, [setFocus]);

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && errorMessageForImage === '' && smile !== '') {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [Object.keys(errors).length, setErrorMessageForImage, place, smile, description, time]);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value.trim());
  };
  const handleDescriptionChange = (e) => {
    console.log(errors);
    setDescription(e.target.value.trim());
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

    try {
      onSubmit(editedData);
      setTime('');
      setPlace('');
      setErrorMessageForImage('');
      setPhotoSrc('');
      setDescription('');
      setSmile('');
      clearErrors();
    } catch (err) {
      setErrorMessageForImage('Что-то пошло не так');
      console.log(err);
    }
  };

  const handleCancelClick = () => {
    setTime('');
    setPlace('');
    setErrorMessageForImage('');
    setPhotoSrc('');
    setDescription('');
    setSmile('');
    clearErrors();
    onDelete();
  };

  function checkSizeImage(size) {
    if (size > 10485760) {
      setErrorMessageForImage('Файл в формате jpeg/png/gif и размером не более 10мб');
      return false;
    }
    setErrorMessageForImage('');
    return true;
  }
  function checkTypeImage(type) {
    console.log(type);
    if (['image/jpeg', 'image/png', 'image/gif', 'image/jpg'].indexOf(type) < 0) {
      setErrorMessageForImage('Файл в формате jpeg/png/gif и размером не более 10мб');
      return false;
    }
    setErrorMessageForImage('');
    return true;
  }
  const handleLoadImage = (e) => {
    // eslint-disable-next-line max-len
    console.log(e.target.files[0], checkSizeImage(e.target.files[0].size), checkTypeImage(e.target.files[0].type), isValid, errors);
    setErrorMessageForImage('');
    clearErrors('image');
    if (e.target.files[0]) {
      if (checkSizeImage(e.target.files[0].size)) {
        if (checkTypeImage(e.target.files[0].type)) {
          setErrorMessageForImage('');
          clearErrors('image');
          setPhotoSrc(window.URL.createObjectURL(e.target.files[0]));
        }
      } else {
        setError('image', {
          type: 'manual',
          message: 'Файл в формате jpeg/png/gif и размером не более 10мб',
        });
        setErrorMessageForImage('Файл в формате jpeg/png/gif и размером не более 10мб');
      }
    }
  };

  // граничные значения для инпута даты
  const nowDate = new Date().toISOString().substring(0, 10);
  const oldDate = new Date(2010, 12, 31).toISOString().substring(0, 10);

  // установка реакции & image при редактировании
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

  React.useEffect(() => {
    setTextReaction(() => {
      switch (smile) {
        case 'bad':
          return 'Бывает и лучше';
        case 'neutral':
          return 'Хорошо';
        case 'good':
          return 'Было классно';
        default:
          return 'Оцените проведенное время';
      }
    });
  }, [smile]);

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
          ref={fileLoad}
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
              minLength={2}
              maxLength={50}
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
              min={oldDate}
              max={nowDate}
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
              minLength={2}
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
              {...register('smile', { required: true })}
              type="radio"
              name="smile"
              id="neutral"
              value="neutral"
              className="personal-area__radioBtn-smile"
              // onChange={handleChangeReaction}
              onChange={handleSmileChange}
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
            <p className={`caption personal-area__rating-label personal-area__rating-label_type_${smile}`}>
              {textReaction}

              {(errors.smile && smile === undefined) && <span className="personal-area__form-input_error">&lt;--------------</span>}
            </p>

          </div>

          <div className="personal-area__buttons">
            <button
              className="button personal-area__delete"
              type="button"
              onClick={handleCancelClick}
            >
              Отменить
            </button>
            <button className="button personal-area__save" type="submit" disabled={disabled}>
              {isEdit ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

MeetingStoryForm.defaultProps = {

  values: {
    id: 0,
    place: '',
    description: '',
    date: '',
    smile: undefined,
    sendToCurator: false,
    image: '',
    name: '',
  },
  isEdit: false,
};

MeetingStoryForm.propTypes = {

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
