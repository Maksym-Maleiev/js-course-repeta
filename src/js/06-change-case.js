/*
 * Напиши функцію changeCase(string) яка замінює регістр
 * кожного символу у рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході має бути рядок «jAVAsCRIPT».
 */

/*
const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  const isEqual = letter === letter.toLowerCase();

  invertedString += isEqual
    ? letter.toUpperCase()
    : letter.toLowerCase();
}

console.log('invertedString', invertedString);
*/

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';
  
  for (const letter of letters) {
  const isInLowerCase = letter === letter.toLowerCase();

  invertedString += isInLowerCase
    ? letter.toUpperCase()
    : letter.toLowerCase();
  }
  
  return invertedString;
};

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX