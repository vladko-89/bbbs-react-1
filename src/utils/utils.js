/* eslint-disable no-console */
import { fromUnixTime, compareAsc } from 'date-fns';
import jwt from 'jsonwebtoken';
import api from './Api';

export function declOfNum(n, textForm) {
  // eslint-disable-next-line no-param-reassign
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForm[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForm[1];
  }
  if (n1 === 1) {
    return textForm[0];
  }
  return textForm[2];
}

export function useAuth(setUserData, setLoginState) {
  if (localStorage.getItem('bbbs-token')) {
    const tokenData = JSON.parse(localStorage.getItem('bbbs-token'));
    const accessToken = jwt.decode(tokenData.access);
    const refreshToken = jwt.decode(tokenData.refresh);
    if (!(compareAsc(fromUnixTime(accessToken.exp), new Date()) === 1)) { // access token expired
      if (compareAsc(fromUnixTime(refreshToken.exp), new Date()) === 1) { // refresh token valid
        console.log('trying to update access');
        api.updateToken(tokenData.refresh)
          .then((res) => {
            localStorage.setItem('bbbs-token', JSON.stringify(res));
          })
          .catch((err) => console.log(err));
      }
    }
    // recheck that we _now_ have a valid access token
    if (compareAsc(fromUnixTime(accessToken.exp), new Date()) === 1) {
      api.getUserInfo(tokenData.access)
        .then((res) => { console.log(res); setUserData(res); setLoginState(true); })
        .catch((err) => console.log(err));
    }
  }
}

export function getAccessToken() {
  if (localStorage.getItem('bbbs-token')) {
    const tokenData = JSON.parse(localStorage.getItem('bbbs-token'));
    const accessToken = jwt.decode(tokenData.access);
    const refreshToken = jwt.decode(tokenData.refresh);
    if (!(compareAsc(fromUnixTime(accessToken.exp), new Date()) === 1)) { // access token expired
      if (compareAsc(fromUnixTime(refreshToken.exp), new Date()) === 1) { // refresh token valid
        console.log('trying to update access');
        api.updateToken(tokenData.refresh)
          .then((res) => {
            localStorage.setItem('bbbs-token', JSON.stringify(res));
          })
          .catch((err) => console.log(err));
      }
    }
    // recheck that we _now_ have a valid access token
    if (compareAsc(fromUnixTime(accessToken.exp), new Date()) === 1) {
      console.log('token valid');
      return tokenData.access;
    } localStorage.removeItem('bbbs-token'); // access && refresh expired
  }
  return null;
}
export function filterByTags(tags, data) {
  return (!tags.length)
    ? data
    : data.filter(
      (item) => item.tags.some((itemTag) => tags.some((tagId) => tagId === itemTag.id)),
    );
}

export function toggleTagId(tagId, tagIdArray) {
  if (tagId === 0) {
    return [];
  }
  const index = tagIdArray.findIndex((tag) => tag === tagId);
  if (index >= 0) {
    return tagIdArray.filter((tag) => tag !== tagId);
  }
  return [...tagIdArray, tagId];
}
