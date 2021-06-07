export const tags = [
  {
    id: 0,
    name: 'Все',
    slug: 'all',
  },
  {
    id: 1,
    name: 'Научные',
    slug: 'science',
  },
  {
    id: 2,
    name: 'Художественные',
    slug: 'art',
  },
];

export const annotation = [
  'Аннотация книги, статьи, фильма в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
  'Аннотация статьи в несколько абзацев. Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга, потом понимать чуть лучше и, в конце концов, научитесь даже шутить. Аннотация статьи в несколько абзацев.',
];

const colors = [
  'blue',
  'pink',
];

export const books = [
  {
    id: 0,
    tags: [
      tags[1],
    ],
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    annotation,
    color: colors[0],
  },
  {
    id: 1,
    tags: [
      tags[2],
    ],
    title: 'Жизнь после утраты. Психология горевания',
    author: 'Волкан Вамик',
    year: 2011,
    annotation,
    color: colors[1],
  },
  {
    id: 2,
    tags: [
      tags[1],
    ],
    title: 'Жизнь после утраты',
    author: 'Волкан Вамик, Зинтл Элизабет',
    year: 2011,
    annotation,
    color: colors[0],
  },
  {
    id: 3,
    tags: [
      tags[2],
    ],
    title: 'Жизнь после утраты. Психология горевания',
    author: 'Волкан Вамик',
    year: 2011,
    annotation,
    color: colors[1],
  },
];
