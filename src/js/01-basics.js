/*
 * Функції
 * - Функціональні висловлювання
 * - Аргументи та параметри
 * - Повернення значення
 */

/*
const add = function (x, y) {
  console.log(x);
  console.log(y);

  // const result = x + y;
  console.log('Виконується ф-ія add');

  return x + y;
}

const r1 = add(5, 3);
console.log('r1:', r1);

const r2 = add(10, 15);
console.log('r2:', r2);

const r3 = add(30, 50);
console.log('r3:', r3); 
*/

/*
const fn = function (value) {
  console.log(1);
  console.log(2);

  if (value < 50) {
    return 'Менше ніж 50';
  }

  return 'Більше ніж 50';
};

console.log('Результат ф-ії:', fn(10));
console.log('Результат ф-ії:', fn(1000));
*/

/*
 * - Стек викликів
 * - Stack trace та пошук помилок
 */

const fnA = function() {
  console.log('Виконується функція A');

  fnB();
};

const fnB = function() {
  console.log('Виконується функція B');

  fnC();
};

const fnC = function() {
  console.log('Виконується функція C');

  console.log(value);
};

// console.log('Лог перед викликом функції A');
fnA();
// console.log('Лог після виклику функції A');

// console.log('Лог перед викликом функції B');
// fnB();
// console.log('Лог після виклику функції B');

// console.log('Лог перед викликом функції C');
// fnC();
// console.log('Лог після виклику функції C');