/*
 * Функція зворотного виклику (callback)
 * - Функція може приймати інші функції як параметри
 * - Функція яка передається іншій функції як аргумент називається
 * "функцією зворотного (відкладеного) виклику" (callback-функція)
 * - Функція, яка приймає іншу функцію як параметр
 * або повертає функцію як результат своєї роботи називається "функцією вищого порядку"
 */

// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('Це лог при виклику fnB', number);
// };

// fnA('qweqwe', fnB);

/*
 * функція doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(10, 8, function (x, y) {
//   return x - y;
// });

/*
 * Відкладений виклик: реєстрація подій
 */

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
  console.log('Кліп по кнопці' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

/*
 * Відкладений виклик: геолокація
 */

const onGetPositionSuccess = function (position) {
  console.log('Це виклик onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Це виклик onGetPositionError');
  console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

/*
 * Відкладений виклик: інтервали
 */

const callback = function () {
  console.log('Через 2 секунди всередині колбеку у таймууті');
};

// console.log('У коді перед таймаутом');
// setTimeout(callback, 2000);
// console.log('У коді після таймууту');

/*
 * Відкладений виклик: http-запит
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
  console.log(
    'Виклик функції onRequestSuccess після успішної відповіді бекенда'
  );
  console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccess);

/*
 * Фільтр
 */

const filter = function (array, test) {
  const filteredArray = [];

  for (const element of array) {
    console.log(element);
    const passed = test(element);

    if (passed) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

// 1. Треба передати функцію
// 2. функція отримує елемент масиву
// 3. якщо елемент масиву задовольняє умові, то функція поверне true
// 3. якщо елемент масиву НЕ задовольняє умові, то функція поверне false

const callback1 = function (value) {
  return value >= 3;
};

const callback2 = function (value) {
  return value <= 4;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
