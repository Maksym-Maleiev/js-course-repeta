/*
 * Напиши скрипт, який вважає суму елементів двох масивів.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

/*
for (const number of array1) {
  console.log(number);
  total += number;
}

for (const number of array2) {
  console.log(number);
  total += number;
}
*/

const newArray = array1.concat(array2);

for (const number of newArray) {
  console.log(number);
  total += number; 
}

console.log('total: ', total);

