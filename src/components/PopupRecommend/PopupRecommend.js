/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import CitiesListContext from '../../contexts/CitiesListContext';
import api from '../../utils/Api';
import { getAccessToken, prepareDetails } from '../../utils/utils';
import styles from './PopupRecommend.module.scss';

const modalRoot = document.getElementById('modal-root');

function PopupRecommend({ onSuccess, onClose }) {
  // eslint-disable-next-line no-unused-vars
  const [photoSrc, setPhotoSrc] = React.useState('');
  const citiesList = React.useContext(CitiesListContext);
  const [err, setErr] = React.useState(null);
  const { register, formState: { errors }, handleSubmit } = useForm({
    reValidateMode: 'onBlur',
    mode: 'onTouched',
  });
  const onSubmit = (data) => {
    api.addPlace(getAccessToken(), data)
      .then((res) => {
        if (res.message) {
          return setErr({ message: res.message, details: prepareDetails(res.details) });
        } onSuccess(); return onClose();
      });
  };

  const handleClose = React.useCallback(
    (e) => {
      if (e.code !== 'Escape' && e.type === 'keydown') {
        return;
      }
      onClose();
    },
    [onClose],
  );

  const handleLoadImage = (e) => {
    setPhotoSrc(window.URL.createObjectURL(e.target.files[0]));
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, [handleClose]);

  return ReactDOM.createPortal(
    <div className={`${styles.popup} ${styles.popup_type_recommendation}`}>
      <div className={`${styles.popup__container}`}>
        <button aria-label="close" className={`${styles.popup__close} ${styles.popup__cancel}`} type="button" onClick={onClose} />
        <div className={`${styles.popup__content} ${styles.popup__content_type_recommendation}`}>
          <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} ${styles.recommendation}`} name="place-recommendation" noValidate>
            <fieldset className={`${styles['recommendation__place-info']}`}>
              <legend className={`${styles['section-title']} ${styles.recommendation__title}`}>
                Если вы были в интересном месте и хотите порекомендовать его другим наставникам –
                заполните форму, и мы добавим вашу рекомендацию.
              </legend>
              <div className={`${styles['recommendation__input-wrap']}`}>
                <div className={styles.input__wrapper}>
                  <input
                    {...register('title', { required: true })}
                    type="text"
                    name="title"
                    className={`${styles.form__input} ${styles.recommendation__input} ${styles.recommendation__input_type_place}`}
                    required
                    placeholder="Название*"
                  />
                  <p className={styles.error}>{errors.title?.type === 'required' && 'Поле не заполнено'}</p>
                </div>
                <input
                  {...register('link')}
                  type="text"
                  name="link"
                  className={`${styles.form__input} ${styles.recommendation__input} ${styles.recommendation__input_type_website}`}
                  placeholder="Сайт"
                />
                <div className={styles.input__wrapper_large}>
                  <select
                    {...register('city', { required: true })}
                    name="city"
                    className={`${styles.form__input} ${styles.recommendation__input}  ${styles.recommendation__input_type_select}`}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Город*</option>
                    {citiesList.map((el) => (<option key={el.id} value={el.id}>{el.name}</option>))}
                  </select>
                  <p className={styles.error}>{errors.city?.type === 'required' && 'Поле не заполнено'}</p>
                </div>
                <div className={styles.input__wrapper_large}>
                  <input
                    {...register('address', { required: true })}
                    type="text"
                    name="address"
                    className={`${styles.form__input} ${styles.recommendation__input} ${styles.recommendation__input_type_address}`}
                    required
                    placeholder="Адрес*"
                  />
                  <p className={styles.error}>{errors.address?.type === 'required' && 'Поле не заполнено'}</p>
                </div>
                <div className={styles['recommendation__box-inputs']}>
                  <div className={styles.input__wrapper}>
                    <label className={`${styles.form__input} ${styles.recommendation__input} ${styles.recommendation__input_type_radio}`}>
                      <input
                        {...register('gender', { required: true })}
                        type="radio"
                        name="gender"
                        value="M"
                        className={styles.recommendation__radio}
                        required
                      />
                      <span className={styles['recommendation__visible-radio']} />
                      Мальчик
                    </label>
                    <p className={styles.error}>{errors.gender?.type === 'required' && 'Выберите пол'}</p>
                  </div>
                  <label className={`${styles.form__input} ${styles.recommendation__input} ${styles.recommendation__input_type_radio}`}>
                    <input
                      {...register('gender', { required: true })}
                      type="radio"
                      name="gender"
                      value="F"
                      className={styles.recommendation__radio}
                      required
                    />
                    <span className={styles['recommendation__visible-radio']} />
                    Девочка
                  </label>
                  <div className={styles.input__wrapper}>
                    <input
                      {...register('age', { required: true, min: 1, max: 40 })}
                      type="number"
                      name="age"
                      className={`${styles.form__input} ${styles.recommendation__input} ${styles.recommendation__input_type_age}`}
                      required
                      placeholder="Возраст*"
                    />
                    <p className={styles.error}>{errors.age?.type === 'required' && 'Поле не заполнено'}</p>
                    <p className={styles.error}>{errors.age?.type === 'min' && 'Возраст должен быть больше 1'}</p>
                    <p className={styles.error}>{errors.age?.type === 'max' && 'Возраст должен быть меньше 40'}</p>
                  </div>
                </div>
                <div className={styles.input__wrapper_large}>

                  <select
                    {...register('activity_type', { required: true })}
                    name="activity_type"
                    className={`${styles.form__input} ${styles.recommendation__input}  ${styles.recommendation__input_type_select}`}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Тип отдыха*</option>
                    <option value="0">Активный</option>
                    <option value="1">Развлекательный</option>
                    <option value="2">Познавательный</option>
                  </select>
                  <p className={styles.error}>{errors.activity_type?.type === 'required' && 'Поле не заполнено'}</p>
                </div>
                <div className={styles.input__wrapper_large}>
                  <input
                    {...register('description', { required: true })}
                    className={`${styles.form__input} ${styles.recommendation__input}  ${styles.recommendation__input_type_textarea}`}
                    required
                    placeholder="Комментарий* Поделитесь впечатлениями о проведенном времени"
                  />
                  <p className={styles.error}>{errors.description?.type === 'required' && 'Поле не заполнено'}</p>
                </div>
                <div className={styles.input__wrapper}>
                  <label className={`${styles.caption} ${styles['recommendation__add-photo']}`}>
                    <input
                      {...register('imageUrl', { required: true })}
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      name="imageUrl"
                      id="imageUrl"
                      onChange={handleLoadImage}
                      className={styles['recommendation__file-input']}
                    />
                    <span className={styles['recommendation__add-photo-button']}>
                      {photoSrc !== '' && (
                      <img
                        src={photoSrc}
                        alt={photoSrc?.substring(photoSrc.lastIndexOf('/') + 1, photoSrc.lastIndexOf('.')) || '#'}
                        className={styles.card_photo}
                      />
                      )}
                    </span>
                    Добавить фото
                  </label>

                  <p className={styles.error}>{errors.imageUrl?.type === 'required' && 'Добавьте фотографию'}</p>
                </div>
                <button className={`${styles.button} ${styles.button_theme_light} ${styles.recommendation__submit}`} type="submit">
                  Отправить
                </button>
                <div className={styles.error_backend}>
                  <p className={styles.error}>{err?.message}</p>
                  {err?.details && <p className={styles.error}>{err?.details}</p> }
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

    </div>,
    modalRoot,
  );
}

export default PopupRecommend;
PopupRecommend.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
