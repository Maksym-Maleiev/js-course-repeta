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
const number = 15;

console.log(`Число ${number} попадає у відрізок до ${x1}? `, number < x1);

console.log(`Число ${number} попадає у відрізок після ${x2}? `, number > x2);

const res1 = number > x1 && number < x2;
// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true

console.log(`Число ${number} попадає у відрізок від ${x1} до ${x2}? `, res1);

const res2 = number < x1 || number > x2; 
// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false

console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}`, res2);