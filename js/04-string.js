/*
 * Довжина рядку, властивість length
 */

const message = 'В цьому рядку 26 символів.';

console.log(message.length);

/*
 * Конкатенация рядків
 */

const firstName = 'Max';
const lastName = 'Solovey';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

/*
 * Напиши скрипт який виводить рядок у форматі:
 * «Гість x y засиляється у n номер q»,
 * підставив замість x y z q значення змінних
 */

const room = 716;
const type = 'VIP';

// This is old school
/*
const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' засиляється у ' + type + ' номер ' + room;

console.log(welcomeMsg);
*/

/*
 * Шаблонні рядки (template strings)
 * Повертаємось до стану рядка заселення у готель
 */

const quantity = 5;
const orderMsg = `Ви замовляєте ${quantity} холодильників.`;

console.log(orderMsg);

const welcomeMsg = `Гість ${firstName} ${lastName} засиляється у ${type} номер ${room}`;

console.log(welcomeMsg);

/*
 * Нормалізація з методом toLowerCase()
 */

const brand = 'Apple';
const inDb = 'apple';
const normalize = brand.toLowerCase();

console.log(normalize === inDb);




/*
 * Пошук у рядку з методом includes()
 */