/*
 * Array.prototype.find()
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 20);
// console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Шукаємо гравця з id
 */

const playerIdToFind = 'player-3';
const playerWithId = players.find(({ id }) => id === playerIdToFind);

// console.log(playerWithId);

const finPlayerById = (allPlayers, playerId) =>
  allPlayers.find(({ id }) => id === playerId);

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-2'));
// console.log(finPlayerById(players, 'player-4'));
// console.log(finPlayerById(players, 'player-5'));

/*
 * Шукаємо гравця на ім'я
 */

const findPlayerByName = (allPlayers, playerName) =>
  allPlayers.find(({ name }) => name === playerName);

console.log(findPlayerByName(players, 'Poly'));
console.log(findPlayerByName(players, 'Ajax'));
