/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import {
  baseUrl, delayResponse,
} from './Constants';
import mockMain from './mockMain.json';
import mockEvents from './mockEvents.json';
import mockCalendar from './mockCalendar.json';
import mockToken from './mockToken.json';

const mock = new MockAdapter(axios, { delayResponse });

class Api {
  constructor(paramBaseUrl) {
    this._baseUrl = paramBaseUrl;
  }

  getMain(token) {
    mock.onGet(`${this._baseUrl}/main`).reply(200, mockMain);
    return axios
      .get(`${this._baseUrl}/main`,
        { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getEvents(token) {
    mock.onGet(`${this._baseUrl}/afisha/events/`).reply(200, mockEvents);
    return axios
      .get(`${this._baseUrl}/afisha/events/`,
        { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCalendar(token) {
    mock.onGet(`${this._baseUrl}/calendar`).reply(200, {
      calendar: mockCalendar,
    });
    return axios
      .get(`${this._baseUrl}/calendar`,
        { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  signIn(login, password) {
    mock.onPost(`${this._baseUrl}/token`).reply(200, mockToken);
    return axios
      .post(`${this._baseUrl}/token`, {
        login,
        password,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  // Need more data about backend
  checkToken(jwt) {
    mock.onPost(`${this._baseUrl}/token`).reply(200, mockToken);
    return axios
      .post(`${this._baseUrl}/token`, { jwt })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
}
const api = new Api(baseUrl);

export default api;
