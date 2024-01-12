/*
 * Порахувати загальну суму покупок у кошику
 */

/*
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2. об'явити змінну total до циклу
let total = 0;

// 1. перебрати масив
for (let i = 0; i < cart.length; i += 1){
  // 3. кожний елемент додати до total
  total += cart[i];
  console.log(cart[i]);
}

  console.log(`total: ${total}`);
*/

// теж саме тільки використовуємо for...of

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  total += value;
  console.log(value);
}

console.log('total: ', total);

// Додати таксу
/*
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

for (let i = 0; i < cart.length; i += 1){
  cart[i] = Math.round(cart[i] * 1.1);
}

console.log(cart);
*/

// через for...of не получиться так зробити
/*
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

for (let value of cart){
  value = Math.round(value * 1.1);
}

console.log(cart);
*/