/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PopupRecommendSuccess.module.scss';
import image from '../../images/where-to-go/rec_done.svg';

const modalRoot = document.getElementById('modal-root');

function PopupRecommendSuccess({ onClose }) {
  return ReactDOM.createPortal(
    <div className={`${styles.popup} ${['popup_type_recommendation-finish']}`}>
      <div className={styles.popup__container}>
        <button aria-label="close" className={`${styles.popup__close} ${styles.popup__cancel}`} type="button" onClick={onClose} />
        <div className={`${styles.popup__content} ${styles['popup__content_type_recommendation-finish']}`}>
          <img src={image} alt="Старшие Братья Старшие Сестры" className={styles.popup__img} />
          <p className={`${styles['section-title']} ${styles['popup__finish-text']}`}>
            Спасибо, мы проверим информацию, и скоро все пользователи смогут увидеть вашу
            рекомендацию
          </p>
        </div>
      </div>
    </div>, modalRoot,
  );
}
export default PopupRecommendSuccess;
