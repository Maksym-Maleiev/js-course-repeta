/*
 * Напиши скрипт який перевіряє входження числа
 * у відрізок позначений x1 та x2.
 *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */

const x1 = 10;
const x2 = 30;
const number = 5;

console.log(`Число ${number} попадає у відрізок до ${x1}? `, number < x1);

console.log(`Число ${number} попадає у відрізок після ${x2}? `, number > x2);

const res1 = number > x1 && number < x2;
console.log(`Число ${number} попадає у відрізок від ${x1} до ${x2}? `, res1);

const res2 = number < x1 || number > x2; 
console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x1}`, res2);