/*
 * Об'єкти (робимо плейлист музики: ім'я, рейтинг, треки, кількість треків)
 * - Літерал об'єкта
 * - Властивості, ключі (ім'я) та значення
 * - Як відрізнити об'єкт від області видимості
 */

/*
const playlist = {
  name: 'My playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

console.log(playlist);

const x = {};

const fn = function (myObject) {
  // myObjext = {a: 1, b: 2}
  console.log(myObject);
};

fn({ a: 1, b: 2 });

const rtfm = function () {
  return { a: 5 };
};

console.log(rtfm());
*/

/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутні властивості
 */

const playlist = {
  name: 'My playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

// playlist.sings = 'Imagine Dragons';
// playlist.rating = 10;

// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

/*
 * Короткий запис властивостей
 */

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};

// console.log(signupData);

/*
 * Обчислювані властивості
 */

//TODO <input name = "color" value = "tomato">

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

/*
 * Посилальний тип {} === {}
 */

//!❌ console.log({ a: 1 } === { a: 1 });
//!❌ console.log([] === []);

/*
const a = { x: 1, y: 2 };
const b = a;

console.log(b === a);

a.c = 100;
b.c = 150;

console.log(a);
console.log(b);
*/

/*
 * Масиви та функції це об'єкти
 */

/*
// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

const fn = function () {
  console.log('hello');
};

fn.hello = ':)';

console.dir(fn.hello);

// const a = [1, 2, 3];

// a.push(4);

// console.log(a);
*/
