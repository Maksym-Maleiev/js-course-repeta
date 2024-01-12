/*
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1. змінна total
let total = 0;

// 2. перебрати масив
/*
for (let i = 0; i < numbers.length; i += 1){
  const number = numbers[i]; 
      // 3. на кожній ітерації перевірити число на парне
  if (number % 2 === 0) {
    console.log(number);

    // 4. якщо парне число, то додаєм до total
    total += number;
  }
}
*/

/*
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(`${number} - парне!`);
    total += number;
  }
}

console.log(`Total even: ${total}`);
*/

// використовуємо continue

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Цю ітерацію пропускаємо', number);
    continue;
  }

  console.log(`${number} - парне!`);
  total += number;
}

console.log(`Total even: ${total}`);