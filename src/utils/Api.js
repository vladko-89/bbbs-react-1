/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import {
  baseUrl,
} from './Constants';

class Api {
  constructor(paramBaseUrl) {
    this._baseUrl = paramBaseUrl;
  }

  getMain() {
    const accessToken = JSON.parse(localStorage.getItem('bbbs-token'))?.access;
    return axios
      .get(`${this._baseUrl}/main/`, accessToken && { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getEvents(accessToken) {
    return axios
      .get(`${this._baseUrl}/afisha/events/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCalendar(accessToken) {
    return axios
      .get(`${this._baseUrl}/calendar`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  signIn(login, password) {
    const errorMessage = {};
    return fetch(`${this._baseUrl}/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: `${password}`,
        username: `${login}`,
      }),
    })
      // eslint-disable-next-line consistent-return
      .then((res) => {
        console.log(res);
        if (res.ok) { return res.json(); }
        errorMessage.status = res.status;
        errorMessage.statusText = res.statusText;
        return res.json();
      })
      .then((res) => {
        if (!res.access) {
          errorMessage.text = res.non_field_errors;
          return errorMessage;
        }
        return res;
      })
      .catch((error) => console.log(error));
    // return axios
    //   .post(`${this._baseUrl}/token/`, {
    //     username: login,
    //     password,
    //   })
    //   .then((res) => { console.log(res); return res.data; })
    //   .catch((error) => console.log(error));
  }

  updateToken(refreshToken) {
    return axios
      .post(`${this._baseUrl}/token/refresh/`, { refresh: refreshToken })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getUserInfo(accessToken) {
    return axios
      .get(`${this._baseUrl}/profile/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  updateUserInfo(accessToken, data) {
    console.log(`Bearer ${accessToken}`);
    console.log(data);
    return axios
      .patch(`${this._baseUrl}/profile/`,
        { city: data.id },
        { headers: { Authorization: `Bearer ${accessToken}` } })

      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCitiesList() {
    return axios
      .get(`${this._baseUrl}/cities/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getQuestionsTags() {
    return fetch(`${this._baseUrl}/questions/tags/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => (res.json().then((data) => (res.ok ? data : Promise.reject(data)))))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  getQuestions() {
    return fetch(`${this._baseUrl}/questions/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => (res.json().then((data) => (res.ok ? data : Promise.reject(data)))))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  sendQuestion(question) {
    const accessToken = JSON.parse(localStorage.getItem('bbbs-token')).access;

    return fetch(`${this._baseUrl}/questions/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ question }),
    })
      .then((res) => (res.json().then((data) => (res.ok ? data : Promise.reject(data)))))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  // СОБЫТИЯ КАЛЕНДАРЬ

  // Запись на встречу
  signUpOnEvent(accessToken, id) {
    return axios
      .post(`${this._baseUrl}/afisha/event-participants/`,
        { event: id },
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Отмена записи встречи
  signOutOnEvent(accessToken, _id) {
    return axios
      .delete(`${this._baseUrl}/afisha/event-participants/${_id}/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Получаю все события на которые подписан
  getMyEvents(accessToken) {
    return axios
      .get(`${this._baseUrl}/afisha/event-participants/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getPlaces(cityId) {
    if (localStorage.getItem('bbbs-token')) {
      const token = JSON.parse(localStorage.getItem('bbbs-token')).access;
      return axios
        .get(`${this._baseUrl}/places/`,
          { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => res.data.results)
        .catch((error) => console.log(error));
    }
    return axios
      .get(`${this._baseUrl}/places/?city=${cityId}`)
      .then((res) => res.data.results)
      .catch((error) => console.log(error));
  }
}

const api = new Api(baseUrl);

export default api;
