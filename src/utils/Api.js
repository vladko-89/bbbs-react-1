import { baseUrl, token, mockMain, delayResponse } from './Constants.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios, { delayResponse: delayResponse });



class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  getMain() {
    mock.onGet("/main").reply(200, mockMain);
    return axios
      .get("/main")
      .then((res) => res.data)
      .catch(error => console.log(error));
  }

}
const api = new Api(baseUrl, token);

export default api;
