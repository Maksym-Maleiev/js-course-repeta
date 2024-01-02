/*
 * - Змінні і типи примітивів
 * - const і let
 * - Виведення даних у консоль методом console.log()
 * - Унікальність індентифікатора
 */

const age = 10;
const totalPrice = 200.64;
const userName = 'Max';
const message = 'Доброго вечора ми з України!';
const isOpen = true;
const shouldConfirm = false;

console.log(age);
console.log('Вартість:', totalPrice);
console.log(userName);
console.log(message);
console.log(isOpen);
console.log(shouldConfirm);

/*
 * * - Оператор typeof()
 */

const type = typeof isOpen;

console.log(type);

/*
 * - Як window.alert() блокує інтерпретацію
 */

alert('Доброго вечора ми з України!');