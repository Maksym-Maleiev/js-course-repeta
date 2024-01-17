/*
 * Псевдомасив arguments і Array.from і ...
 */

/*
const fn = function () {
  console.log(arguments);

  const args = Array.from(arguments);

  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);
*/

/*
const fn = function (...args) {
  console.log(args);
};

fn('Hello', 1, 2, 3);
fn('Hi', 1, 2, 3, 4, 5);
fn('Aloha', 1, 2, 3, 4, 5, 6, 7);
*/

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

/*
const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));
*/

/*
 * Напиши функцію filterNumbers(array [, number1, ...]) яка:
 * - першим аргументом приймає масив чисел
 * - після першого аргументу може бути довільна кількість інших аргументів, які будуть числами.
 * - Функція повинна повернути новий масив, в якому будуть лише ті аргументи, починаючи з другого,
 * для яких є аналог в оригінальному масиві.
 */

const filterNumbers = function (array, ...args) {
  console.log('array:', array);
  console.log('args', args);

  const newArr = [];

  for (const element of array) {
    if (args.includes(element)) {
      newArr.push(element);

      console.log(`${element} - є усюди!`);
    }
  }

  return newArr;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
