/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { baseUrl } from './Constants';

class Api {
  constructor(paramBaseUrl) {
    this._baseUrl = paramBaseUrl;
  }

  getMain(accessToken) {
    return axios
      .get(
        `${this._baseUrl}/main/`,
        accessToken && { headers: { Authorization: `Bearer ${accessToken}` } },
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getEvents(accessToken) {
    return axios
      .get(`${this._baseUrl}/afisha/events/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCalendar(accessToken) {
    return axios
      .get(`${this._baseUrl}/calendar`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getPlacesTags() {
    return axios
      .get(`${this._baseUrl}/places/tags/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getPlaces({
    token, cityId, limit, offset, tags,
  }) {
    const params = new URLSearchParams();
    if (!token) { params.append('city', cityId); }
    if (limit) {
      params.append('limit', limit);
      params.append('offset', offset);
    }
    if (tags) tags.forEach((tag) => params.append('tag', tag));
    return axios
      .get(`${this._baseUrl}/places/`,
        token ? {
          headers: { Authorization: `Bearer ${token}` },
          params,
        } : {
          params,
        })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  addPlace(accessToken, place) {
    return fetch(`${this._baseUrl}/places/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(place),
    })
      .then((res) => { console.log(res); return res.json(); });

    // .then((data) => (res.ok ? data : Promise.reject(data)));
  }

  signIn(login, password) {
    const errorMessage = {};
    return (
      fetch(`${this._baseUrl}/token/`, {
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
          if (res.ok) {
            return res.json();
          }
          return res.json();
        })
        .then((res) => {
          if (!res.access) {
            errorMessage.text = res.message;
            return errorMessage;
          }
          return res;
        })
        .catch((error) => console.log(error))
    );
  }

  updateToken(refreshToken) {
    return axios
      .post(`${this._baseUrl}/token/refresh/`, { refresh: refreshToken })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getUserInfo(accessToken) {
    return axios
      .get(`${this._baseUrl}/profile/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  updateUserInfo(accessToken, data) {
    console.log(`Bearer ${accessToken}`);
    console.log(data);
    return axios
      .patch(
        `${this._baseUrl}/profile/`,
        { city: data.id },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      )

      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getMeetingStories(accessToken) {
    return axios
      .get(`${this._baseUrl}/meetings/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  postMeetingStories(accessToken, data) {
    return axios
      .post(`${this._baseUrl}/meetings/`, {
        data,
      }, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },

      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  deleteMeetingStory(accessToken, id) {
    return axios
      .delete(`${this._baseUrl}/meetings/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      }).then((res) => (res.ok ? res : Promise.reject(res)))
      .catch((error) => console.log(error));
  }

  editMeetingStory(accessToken, data) {
    return axios
      .put(`${this._baseUrl}/meetings/${data.id}`,
        { data }, {
          headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        })
      .then((res) => (res.ok ? res.data : Promise.reject(res)))
      .catch((error) => console.log(error));
  }

  getCitiesList() {
    return axios
      .get(`${this._baseUrl}/cities/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  async getQuestionsTags() {
    return fetch(`${this._baseUrl}/questions/tags/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  async getQuestions(searchParams = '') {
    return fetch(`${this._baseUrl}/questions/?${searchParams}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  // eslint-disable-next-line class-methods-use-this
  async getMoreQuestions(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  async sendQuestion(question) {
    const accessToken = JSON.parse(localStorage.getItem('bbbs-token'))?.access;

    return fetch(`${this._baseUrl}/questions/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ question }),
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  // СОБЫТИЯ КАЛЕНДАРЬ

  // Запись на встречу
  signUpOnEvent(accessToken, id) {
    return axios
      .post(
        `${this._baseUrl}/afisha/event-participants/`,
        { event: id },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Отмена записи встречи
  signOutOnEvent(accessToken, _id) {
    return axios
      .delete(`${this._baseUrl}/afisha/event-participants/${_id}/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Получаю все события на которые подписан
  getMyEvents(accessToken) {
    return axios
      .get(`${this._baseUrl}/afisha/event-participants/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // ПРАВА ДЕТЕЙ

  // Получаю карточки прав
  getRights(tags) {
    const params = new URLSearchParams();
    if (tags) tags.forEach((tag) => params.append('tag', tag));
    return axios
      .get(`${this._baseUrl}/rights/`, {
        params,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Получаю теги прав
  getRightsTags() {
    return axios
      .get(`${this._baseUrl}/rights/tags/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
}

const api = new Api(baseUrl);

export default api;
