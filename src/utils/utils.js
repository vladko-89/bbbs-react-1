/* eslint-disable no-console */
import { fromUnixTime, compareAsc } from 'date-fns';
import jwt from 'jsonwebtoken';
import api from './Api';
import { MONTH_NUMBERS } from './constants';

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
export function getMonthPrescription(str) {
  return MONTH_NUMBERS[str];
}

export function useAuth(setUserData, setLoginState) {
  if (localStorage.getItem('bbbs-token') !== 'undefined' && localStorage.getItem('bbbs-token') !== null) {
    const tokenData = JSON.parse(localStorage.getItem('bbbs-token'));
    const parsedAccess = jwt.decode(tokenData.access);
    const parsedRefresh = jwt.decode(tokenData.refresh);
    console.log('access exp date', fromUnixTime(parsedAccess.exp));
    if (!(compareAsc(fromUnixTime(parsedAccess.exp), new Date()) === 1)) { // access token expired
      if (compareAsc(fromUnixTime(parsedRefresh.exp), new Date()) === 1) { // refresh token valid
        console.log('trying to update access');
        api.updateToken(tokenData.refresh)
          .then((res) => {
            localStorage.setItem('bbbs-token', JSON.stringify(res));
          })
          .catch((err) => console.log(err));
      }
    }
    // recheck that we _now_ have a valid access token
    if (compareAsc(fromUnixTime(parsedAccess.exp), new Date()) === 1) {
      api.getUserInfo(tokenData.access)
        .then((res) => { console.log('auth =>', res); setUserData(res); setLoginState(true); })
        .catch((err) => console.log(err));
    }
    //  localStorage.removeItem('bbbs-token'); // no valid access and refresh tokens
  }
  return null; // means an error
}

export function getAccessToken() {
  if ((localStorage.getItem('bbbs-token') !== 'undefined' && localStorage.getItem('bbbs-token') !== null)) {
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
      return tokenData.access;
    } // localStorage.removeItem('bbbs-token'); // access && refresh expired
  }
  return null;
}

export function colorizeCards(cardsArr, colorsArr) {
  function getColor(count, colors) {
    if (count >= colors.length) { return colors[count % colors.length]; }
    return colors[count];
  }
  return cardsArr.map((card, index) => ({ ...card, color: getColor(index, colorsArr) }));
}

export function prepareDetails(details) {
  const arr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(details)) {
    arr.push(`${key}: ${value}`);
  }
  return arr;
}

export const splitOnBlocks = (initialArr, blocks) => {
  const resultArr = [];
  if (!(typeof (initialArr) === 'undefined')) {
    initialArr.forEach((el, index) => {
      if ((index) % blocks === 0) { resultArr.push(initialArr.slice(index, (blocks + index))); }
    });
  }
  return resultArr;
};
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

export function toggleTag(tag, tagArray) {
  if (tag.id === 0) {
    return [];
  }
  const index = tagArray.findIndex((item) => item.id === tag.id);
  if (index >= 0) {
    return tagArray.filter((item) => item.id !== tag.id);
  }
  return [...tagArray, tag];
}

export function formingCards(cardsArr, formsArr, colorsArr) {
  function getForm(count, forms) {
    if (count >= forms.length) { return forms[count % forms.length]; }
    return forms[count];
  }
  function getColor(count, colors) {
    if (count >= colors.length) { return colors[count % colors.length]; }
    return colors[count];
  }
  const NewArr = cardsArr.map((card, index) => ({ ...card, form: getForm(index, formsArr) }));
  const result = NewArr.map((card, index) => ({ ...card, color: getColor(index, colorsArr) }));
  console.log('NewArr', result);
  return result;
}
