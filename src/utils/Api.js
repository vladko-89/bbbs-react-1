/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import {
  baseUrl,
} from './Constants';
// import mockMain from './mockMain.json';
// import mockEvents from './mockEvents.json';
// import mockCalendar from './mockCalendar.json';
// import mockToken from './mockToken.json';
// import mockUser from './mockUser.json';
// import mockUserInfo from './mockUserInfo.json';

class Api {
  constructor(paramBaseUrl) {
    this._baseUrl = paramBaseUrl;
  }

  getMain(accessToken) {
    // mock.onGet(`${this._baseUrl}/main`).reply(200, mockMain);
    return axios
      .get(`${this._baseUrl}/main/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getEvents(accessToken) {
  //  mock.onGet(`${this._baseUrl}/afisha/events/`).reply(200, mockEvents);
    return axios
      .get(`${this._baseUrl}/afisha/events/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCalendar(accessToken) {
    //   mock.onGet(`${this._baseUrl}/calendar`).reply(200, {
    //   calendar: mockCalendar,
    // });
    return axios
      .get(`${this._baseUrl}/calendar`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  signIn(login, password) {
    // return fetch(`${this._baseUrl}/token/`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     password: `${password}`,
    //     username: `${login}`,
    //   }),
    // })
    //   .then((res) => res.json())
    return axios
      .post(`${this._baseUrl}/token/`, {
        username: login,
        password,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCurrentUser(accessToken) {
  //  mock.onPost(`${this._baseUrl}/users`).reply(200, mockUser);
    return axios
      .post(`${this._baseUrl}/users`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  updateToken(refreshToken) {
    return axios
      .post(`${this._baseUrl}/token/refresh/`, { refresh: refreshToken })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getUserInfo(accessToken) {
  //  mock.onPost(`${this._baseUrl}/profile`).reply(200, mockUserInfo);
    return axios
      .get(`${this._baseUrl}/profile/`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  updateUserInfo(data) {
    // mock.onPatch(`${this._baseUrl}/profile`).reply(200, mockUserInfo);
    return axios
      .patch(`${this._baseUrl}/profile`,
        {
          body: {
            user: data.user,
            city: data.city,
          },
        })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
}
const api = new Api(baseUrl);

export default api;
