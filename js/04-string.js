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

// let brand = prompt('Введіть бренд ноутбука');
let brand = 'Apple';
const normalizedBrand = brand.toLowerCase();

console.log(normalizedBrand);

/*
* Нормалізація окремої частини рядку
* за допомогою методу slice()
*/

let brandName = 'SamsUnG';
console.log(brandName.slice(1).toLowerCase());

brandName = brandName[0] + brandName.slice(1).toLowerCase();
console.log(brandName);

/*
 * Пошук у рядку з методом includes()
 */

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Доброго вечора ми з України, я Максим, це не спам, пропоную тобі приєднатись до нашої команди розробників!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна компанія #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));