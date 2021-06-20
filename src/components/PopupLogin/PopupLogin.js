/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { useFormWithValidation } from '../Validation/Validation';
import api from '../../utils/Api';

function PopupLogin({ onClose, onSubmit, isOpen }) {
  const loginFormValidation = useFormWithValidation();
  const [actionError, setActionError] = React.useState('');

  function closePopup(evt) {
    evt.target.closest('form').reset();
    loginFormValidation.resetForm(evt);
    setActionError('');
    onClose(evt);
  }
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onClose);
    }
    return () => {
      document.removeEventListener('keydown', onClose);
    };
  });
  function submitHandler(e) {
    e.preventDefault();
    api
      .signIn(
        loginFormValidation.values.login,
        loginFormValidation.values.password,
      )
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem('bbbs-token', JSON.stringify(res.access));
          api.getUserInfo(res.access).then((data) => {
            onSubmit(e, data);
          });
          closePopup(e);
        } else {
          setActionError('Произошла ошибка. Попробуйте еще раз.');
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }

  return (
    <div className="popup popup_type_sign-in popup_opened">
      <form className="popup__container popup__container_type_sign-in">
        <button aria-label="close" onClick={closePopup} className="popup__close popup__cancel" type="button" />
        <h2 className="section-title popup__title_type_sign-in">Вход</h2>
        <p className="paragraph popup__sign-in">Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие Сёстры».</p>
        <p className="paragraph popup__sign-in">Пожалуйста, введите логин и пароль из письма. Если вам не приходило письмо, свяжитесь с вашим куратором.</p>
        <input type="text" className="popup__input" id="login" name="login" minLength={2} onChange={loginFormValidation.handleChange} required placeholder="Логин" />
        <p className="popup__input-error" name="login-error">{loginFormValidation.errors.login}</p>
        <input type="password" className="popup__input" id="password" name="password" minLength={8} onChange={loginFormValidation.handleChange} required placeholder="Пароль" />
        <p className="popup__input-error" name="password-error">{loginFormValidation.errors.password}</p>
        <p className="popup__forgot-password ">Забыли пароль?</p>
        <button className="button button_theme_light popup__enter" onClick={submitHandler} type="submit" disabled={!loginFormValidation.isValid}>Войти</button>
        <p className="popup__action-error" name="action-error">{actionError}</p>
      </form>
    </div>
  );
}
PopupLogin.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default PopupLogin;
