/*
 * - Ввод користувача
 * - Методи window.confirm() і window.prompt()
 */

// 'Хочете подовжити підписку?'
/*
const shouldRenew = confirm('Хочете подовжити підписку?');
console.log(shouldRenew);
*/

// 'Введіть кількості товарів'
let quantity = prompt('Введіть кількості товарів');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);