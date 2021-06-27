const baseUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8000'}`; // проект бэка запускается на 8000 порту
const delayResponse = 500;
const scrollDelay = 100;
const cardsPerPage = 16;
const cardsOnMain = 4;
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

export {
  baseUrl, delayResponse, scrollDelay, cardsPerPage, cardsOnMain, placesTextForms, citiesList,
};
