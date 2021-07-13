const baseUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1'}`; // проект бэка запускается на 8000 порту
const delayResponse = 500;
const scrollDelay = 100;
const cardsPerPage = 16;
const cardsOnMain = 4;
export const PLACES_PER_PAGE = 6;
const eventsPerPage = 6;
export const GUIDES_PER_PAGE = 16;
export const RIGHTS_PER_PAGE = 16;
const placesTextForms = ['место', 'места', 'мест'];
const citiesList = [
  'Москва',
  'Санкт-Петербург',
  'Алексин',
  'Барнаул',
  'Екатеринбург',
  'Зубцов',
  'Калининград',
  'Киреевск',
  'Коломна',
  'Новомосковск',
  'Орехово-Зуево',
  'Тверь',
  'Тула',
];

const colors = [
  'yellow',
  'green',
  'yellow',
  'pink',
  'blue',
  'pink',
  'green',
  'yellow',
  'green',
  'blue',
  'pink',
  'blue',
];

const figures = [
  'square',
  'circle',
  'arch',
  'circle',
  'arch',
  'square',
  'arch',
  'square',
  'circle',
];

const MONTH_NUMBERS = {
  '01': 'Января',
  '02': 'Февраля',
  '03': 'Марта',
  '04': 'Апреля',
  '05': 'Мая',
  '06': 'Июня',
  '07': 'Июля',
  '08': 'Августа',
  '09': 'Сентября',
  // eslint-disable-next-line quote-props
  '10': 'Октября',
  // eslint-disable-next-line quote-props
  '11': 'Ноября',
  // eslint-disable-next-line quote-props
  '12': 'Декабря',
};

export {
  baseUrl,
  delayResponse,
  scrollDelay,
  cardsPerPage,
  cardsOnMain,
  eventsPerPage,
  placesTextForms,
  citiesList,
  figures,
  colors,
  MONTH_NUMBERS,
};
