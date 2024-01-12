/*
 * Напиши скрипт пошуку найменшого числа в масиві,
 * за умови, що числа унікальні (не повторюються).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];
let message;

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
    message = `Число ${number} є найменшим`;
  }
}

console.log(message);

