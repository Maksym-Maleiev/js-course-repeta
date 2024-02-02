/*
 * Деструктуризація об'єкта
 * - Значення за замовчуванням
 * - Ім'я змінної відмінне від імені властивості
 */

const playlist = {
  name: 'Мій супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = playlist;

// console.log(numberOfTracks);

/*
 * Глибока деструктуризація
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризація масивів
 */

const rgb = [255, 100, 80];

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

/*
 * Операція rest (збір)
 */

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

/*
 * Паттерн «Об'єкт налаштувань»
 * - деструктуризація параметра-об'єкта у підписі функції
 * - rest при деструктуризації у підписі
 */

const showProfileInfo = function () {};
