/*
 * Парс числа з Number.parseInt() і Number.parseFloat()
 */

let elementWidth = '50px';

elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);

let elementHeight = '200.74px';

elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Така форма запису console.log(Number(число.toFixed(digits)))
 */

let salary = 1300.16472;
salary = Number(salary.toFixed(2));

console.log(salary);

/*
 * - Приведення (перетворення) до числа з Number(value)
 * - Значення NaN (Not a Number) і метод Number.isNaN(value)
 */

let quantity = '30';
let value = 'Цей рядок неможливо привести до числа';

console.log(Number(quantity));
console.log(Number(value));

/*
 * Об'єкт Math
 * - Зведення в ступінь
 * - Exponent operator
 */

// console.log(Math.PI);

/*
const base = 2;
const power = 5;

const result = Math.pow(base, power);
console.log(result);
*/

/*
* Або більш сучасний метод
*/

// console.log(base ** power);

/*
 * Напиши скрипт який просить користувача ввести число і ступінь,
 * зводить число в цей ступінь і виводить результат у консоль
 */

//  1. попросіть ввести число и зберегти у змінну
// let base = prompt('Напиши будь-яке число');
// base = Number(base);

// console.log(base);

//  2. попросить ввести ступінь і зберегти у змінну
// let power = prompt('Напиши ступінь в яке будеш зводить число');
// power = Number(power);

// console.log(power);

//  3. Звести введенні дані у ступінь і вивести
// const result = base ** power;

// console.log(result);

/*
 * Генерим псевдовипадкові числа
 * - Math.random()
 * - Math.round()
 */

// Формула: Math.random() * (max - min) + min;

// const max = 20;
// const min = 1;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

/*
* Приклад з рандомним кольором фону 😄
*/

const colors = ['tomato', 'teal', 'blue', 'green', 'yellow', 'red'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const currentColor = colors[index];

console.log(currentColor);

document.body.style.backgroundColor = currentColor;