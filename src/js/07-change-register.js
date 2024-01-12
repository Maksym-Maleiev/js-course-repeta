/*
 * Напиши скрипт, який замінює регістр кожного символу в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході має бути рядок «jAVAsCRIPT».
 */

/*
const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  if (letter === letter.toLowerCase()) {
    console.log('Ця буква у нижньому регістрі - ', letter);
    invertedString += letter.toUpperCase();
  } else {
    console.log('Ця буква у верхньому регістрі - ', letter);
    invertedString += letter.toLowerCase();
  }
}

console.log('invertedString: ', invertedString);
*/

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  console.log(letter);


  const isEqual = letter === letter.toLowerCase();
  invertedString += isEqual
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);
