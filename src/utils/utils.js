import { compareAsc, parseISO } from 'date-fns';
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
    if (compareAsc(parseISO(tokenData.accessExpire), new Date()) === 1) {
      api.getCurrentUser(tokenData.access)
        .then((res) => { setUserData(res.name); setLoginState(true); })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    } else if (compareAsc(parseISO(tokenData.refreshExpire), new Date()) === 1) {
      api.updateToken(tokenData.refresh)
        .then((res) => localStorage.setItem('bbbs-token', JSON.stringify(res)))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }
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
