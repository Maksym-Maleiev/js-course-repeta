/*
 * Напиши скрипт пошуку логіна
 * - Якщо немає логіну, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() з тернарним оператором
 */

/*
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message;

for (let i = 0; i < logins.length; i += 1){
  const login = logins[i];

  if (login === loginToFind) {
    message = `Користувач ${loginToFind} знайдено.`;
    break;
  } 

    message = `Користувач ${loginToFind} не знайдено.`;
  }
*/

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `Користувач ${loginToFind} не знайдено.`;

for (const login of logins) {
  if (login === loginToFind) {
    message = `Користувач ${loginToFind} знайдено.`;
    break;
  }
}

console.log(message);
