import { baseUrl, token, mockCalendar } from './Constants.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);



class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
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