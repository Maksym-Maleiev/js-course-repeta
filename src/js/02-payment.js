/*
 * Порахувати загальну суму покупок у кошику
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (let i = 0; i < cart.length; i += 1){
  total += cart[i];
  console.log(cart[i]);
}

  console.log(`total: ${total}`);
