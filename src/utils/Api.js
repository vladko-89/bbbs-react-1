/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import {
  baseUrl, token, delayResponse,
} from './Constants';
import mockMain from './mockMain.json';
import mockEvents from './mockEvents.json';
import mockCalendar from './mockCalendar.json';
import mockToken from './mockToken.json';

const mock = new MockAdapter(axios, { delayResponse });

class Api {
  constructor(paramBaseUrl, paramToken) {
    this._baseUrl = paramBaseUrl;
    this._token = paramToken;
  }

  getMain() {
    mock.onGet('/main').reply(200, mockMain);
    return axios
      .get('/main')
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getEvents() {
    mock.onGet('/afisha/events/').reply(200, mockEvents);
    return axios
      .get('/afisha/events/')
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  getCalendar() {
    mock.onGet('/calendar').reply(200, {
      calendar: mockCalendar,
    });
    return axios
      .get('/calendar')
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  signIn(login, password) {
    mock.onPost('/token').reply(200, mockToken);
    return axios
      .post('/token', {
        login,
        password,
      }, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  checkToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      });
  }
}
const api = new Api(baseUrl, token);

export default api;
