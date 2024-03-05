/*
 * Array.prototype.filter()
 * - Поелементо перебирає оригінальний масив
 * - Повертає новий масив (з елементами або порожнім)
 * - Додає в повертається масив елементи, які задовольняють умові коллбек-функції
 * - якщо коллбек повернув true елемент додається в масив, що повертається
 * - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

const numbers = [5, 10, 15, 20, 25];

const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Отримуємо масив усіх онлайн гравців
 */

const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

/*
 * Отримуємо масив усіх офлайн гравців
 */

const offlinePlayers = players.filter(({ online }) => !online);
// console.table(offlinePlayers);

/*
 * Отримуємо список хардкорних гравців з часом більше 250
 */

const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
console.table(hardcorePlayers);
