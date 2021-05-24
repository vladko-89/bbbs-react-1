
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import {
  baseUrl, token, delayResponse, mockCalendar,
} from './Constants';
import mockMain from './main.json';

const mock = new MockAdapter(axios, { delayResponse });

class Api {
  constructor(paramBaseUrl, paramToken) {
    // eslint-disable-next-line no-underscore-dangle
    this._baseUrl = paramBaseUrl;
    // eslint-disable-next-line no-underscore-dangle
    this._token = paramToken;
  }

  // eslint-disable-next-line class-methods-use-this
  getMain() {
    mock.onGet('/main').reply(200, mockMain);
    return axios
      .get('/main')
      .then((res) => res.data)
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }
    getCalendar() {
    mock.onGet("/calendar").reply(200,  {
      calendar: mockCalendar,
    });
    return axios
      .get("/calendar")
      .then((res) => res.data)
      .catch(error => console.log(error));
  }
}
const api = new Api(baseUrl, token);

export default api;
