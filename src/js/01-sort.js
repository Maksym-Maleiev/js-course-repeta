/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує та ЗМІНЯЄ оригінальний масив
 * - За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається.
 * - якщо compareFunction(A, B) менше 0, сортування поставить A перед B
 * - якщо compareFunction(A, B) більше 0, сортування поставить B перед A
 * - якщо compareFunction(A, B) поверне 0, сортування залишить A і B на незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.
 */

// numbers.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbers);

/*
 * Як зробити копію масиву щоб не сортувати оригінальний
 * - Array.prototype.slice()
 * - Операція spread
 */

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('descSortedNumbers', descSortedNumbers);
console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Кастомне сортування складних типів
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = [...players].sort(
    (firstPlayer, lastPlayer) => lastPlayer.timePlayed - firstPlayer.timePlayed,
);
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
    (firstPlayer, lastPlayer) => firstPlayer.timePlayed - lastPlayer.timePlayed,
);
// console.table(sortedByWorstPlayers);

const sortedByName = [...players].sort((firstPlayer, lastPlayer) =>
    firstPlayer.name.localeCompare(lastPlayer.name),
);
console.table(sortedByName);

const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});

console.table(byName);
