/*
 * Оператор розгалуження if
 */

// if (5 > 30) {
//   console.log('dssffsd');
// }
// console.log('Next');

/*
 * Оператор розгалуження if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y')
// }

/*
 * Оператор розгалуження else...if
 */

// const salary = 3001;

// if (salary < 500) {
//   console.log('Рівень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Рівень 2');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('Рівень 3');
// } else {
//   console.log('Рівень 4');
// }

/*
 * Тернарний оператор
 */

const balance = 1000;
// let message;

// if (balance >= 0) {
//   messange = 'Позитивний баланс';
// } else {
//   messange = 'Негативний баланс';
// }

/*
* const message = умова ? 'вираз_1' : 'вираз_2';
*/

const message = balance >= 0 ? 'Позитивний баланс': 'Негативний баланс';

console.log(message);

/*
 * Блокова область видимості змінних
 */

const b = 10;

if (true) {
  console.log(b);
  const a = 5;

  console.log(a);
}

console.log(b);