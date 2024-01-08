/*
 * Напиши прихований підрахунку суми покупки зі знижкою залежно від витраченої суми за весь час (партнерська програма).
 *
 * - Загальна сума витраченого зберігається в змінній totalSpent
 * - Сума поточного платежу зберігається у змінній payment
 * - Знижка зберігається в змінній discount
 *
 * - Якщо витрачено від [100 до 1000) – бронзовий партнер, знижка 2%
 * - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
 * - Якщо витрачено більше [5000 – золотий партнер, знижка 10%
 * - Якщо витрачено менше 100) - не партнер, знижка 0%
 *
 * - В результаті вивести повідомлення
 * «Оформляємо замовлення на суму [сума] зі знижкою [знижка]%»
 */

let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 2;
  console.log(`Бронзовий партнер, знижка ${discount}%`);
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 5;
  console.log(`Срібний партнер, знижка ${discount}%`);
} else if (totalSpent >= 5000) {
  discount = 10;
  console.log(`Золотий партнер, знижка ${discount}%`);
} else {
  console.log(`У вас ще немає партнерської знижки, знижка: ${discount}%`);
}

payment = payment - payment * discount / 100;

console.log(`Оформляємо замовлення на суму ${payment} зі знижкою ${discount}%`);

totalSpent += payment;

console.log(`Загальна сума витрат становить: ${totalSpent} кредитів`);

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'