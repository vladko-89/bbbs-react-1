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

  getEvents({
    token, months, limit, offset,
  }) {
    const params = new URLSearchParams();
    if (months && months.length > 0) {
      params.append('month', months.join(','));
    }
    if (limit) {
      params.append('limit', limit);
      params.append('offset', offset);
    }
    return axios
      .get(`${this._baseUrl}/afisha/events/`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getEventMonths({ token }) {
    return axios
      .get(`${this._baseUrl}/afisha/events/months/`,
        {
          headers: { Authorization: `Bearer ${token}` },
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

  getPlacesTags({ token, cityId }) {
    const params = new URLSearchParams();
    if (!token) { params.append('city', cityId); }
    return axios
      .get(`${this._baseUrl}/places/tags/`,
        token ? {
          headers: { Authorization: `Bearer ${token}` },
          params,
        } : {
          params,
        })
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
    console.log(place);
    const formData = new FormData();
    formData.append('imageUrl', place.imageUrl[0], place.imageUrl[0].name);
    formData.append('title', place.title);
    formData.append('link', place.link);
    formData.append('address', place.address);
    formData.append('activity_type', place.activity_type);
    formData.append('gender', place.gender);
    formData.append('age', place.age);
    formData.append('city', place.city);
    formData.append('description', place.description);
    return (
      fetch(`${this._baseUrl}/places/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      })
        .then((res) => res.json()
          .then((data) => (res.ok ? data : { message: data.message, details: data.details })))
        .catch((error) => console.log(error)));
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
    console.log(data);
    const formdata = new FormData();
    formdata.append('image', data.image, data.image.name);
    formdata.append('place', data.place);
    formdata.append('date', data.date);
    formdata.append('description', data.description);
    formdata.append('smile', data.smile);
    return (
      fetch(`${this._baseUrl}/meetings/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // 'Content-Type': 'application/json',
        },
        body: formdata,
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .catch((error) => console.log(error)));
  }

  deleteMeetingStory(accessToken, id) {
    return axios
      .delete(`${this._baseUrl}/meetings/${id}/`, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      }).then((res) => (res.ok ? res : Promise.reject(res)))
      .catch((error) => console.log(error));
  }

  editMeetingStory(accessToken, data) {
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'image') { formdata.append('image', value, value.name); } else { formdata.append(key, value); }
    });
    return (
      fetch(`${this._baseUrl}/meetings/${data.id}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // 'Content-Type': 'application/json',
        },
        body: formdata,
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .catch((error) => console.log(error))
    );
  }

  shareMeetingStoryTo(accessToken, story) {
    return (
      fetch(`${this._baseUrl}/meetings/send_to_curator/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story),
      })
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .catch((error) => console.log(error))
    );
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

  async getBookTags() {
    return fetch(`${this._baseUrl}/entertainment/books/tags/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  async getBooks(searchParams = new URLSearchParams()) {
    return fetch(`${this._baseUrl}/entertainment/books/?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  async getArticles(searchParams = new URLSearchParams()) {
    return fetch(`${this._baseUrl}/entertainment/articles/?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  async getFilmTags() {
    return fetch(`${this._baseUrl}/entertainment/movies/tags/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => (res.ok ? data : Promise.reject(data))));
  }

  async getFilms(searchParams = new URLSearchParams()) {
    return fetch(`${this._baseUrl}/entertainment/movies/?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
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
  getRights({ tags, limit, offset }) {
    const params = new URLSearchParams();
    if (tags.length > 0) tags.forEach((tag) => params.append('tag', tag));
    if (limit) {
      params.append('limit', limit);
      params.append('offset', offset);
    }
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

  getRightArticle(_id) {
    return axios
      .get(`${this._baseUrl}/rights/${_id}/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // КАРТОЧКИ ВИДЕО
  // Получаю карточки видео
  getVideos(tags, limit, offset) {
    const params = new URLSearchParams();
    if (tags) tags.forEach((tag) => params.append('tag', tag));
    if (limit) {
      params.append('limit', limit);
      params.append('offset', offset);
    }
    return axios
      .get(`${this._baseUrl}/entertainment/videos/`, {
        params,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Получаю теги видео
  getVideosTags() {
    return axios
      .get(`${this._baseUrl}/entertainment/videos/tags/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getVideoCard(_id) {
    return axios
      .get(`${this._baseUrl}/entertainment/videos/${_id}/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getStories() {
    return axios
      .get(`${this._baseUrl}/story/`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // get guides
  getGuide(tags, limit, offset) {
    const params = new URLSearchParams();
    if (tags) tags.forEach((tag) => params.append('tag', tag));
    if (limit) {
      params.append('limit', limit);
      params.append('offset', offset);
    }
    return axios
      .get(`${this._baseUrl}/entertainment/guides/`, {
        params,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
}

const api = new Api(baseUrl);

export default api;
