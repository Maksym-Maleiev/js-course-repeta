/*
 * Напиши функцію findLogin(allLogins, login) для пошуку логіну
 * - Якщо немає логіну, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 */

/*
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

const message = logins.includes(loginToFind)
  ? `Користувача ${loginToFind} знайдено.`
  : `Користувача ${loginToFind} не знайдено.`;
    
console.log(message);
*/

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const findLogin = function (allLogins, loginToFind) {
  /*
    let message = '';

  for (const login of allLogins) {
    message =
      login === loginToFind
        ? `Користувача ${loginToFind} знайдено.`
        : `Користувача ${loginToFind} не знайдено.`;
  }

  return message;
  */

  /*
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Користувача ${loginToFind} знайдено.`;
    }
  }

  return `Користувача ${loginToFind} не знайдено.`;
  */

  return allLogins.includes(loginToFind)
    ? `Користувача ${loginToFind} знайдено.`
    : `Користувача ${loginToFind} не знайдено.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
