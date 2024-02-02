/*
 * Операція spread (розпорошення)
 * - Array.prototype.concat() та аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

// console.log(numbers);

/*
 * Пошук найменшої або найбільшої температури (числа)
 */

const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));
// console.log(temps);

// const a = [{ i: 1 }, { h: 2 }, { j: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].i = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Зшиваємо кілька масивів в один через concat() та spread
 */

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

/*
 * Розпорошення об'єктів
 * - Object.prototype.assign() та spread
 */

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({ name: 'Mango' }, a, b);

const c = {
  ...a,
  x: 10,
  ...b,
  y: 20,
};

// console.log(c);

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
