/*
 * Робимо з колекцією карток у trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Видалення (за індексом), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/*
 * Додавання (за індексом)
 */

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(3, 0, cardToInsert);

// console.table(cards);

/*
 * Оновлення (за індексом)
 */

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'cardToUpdate');
console.table(cards);