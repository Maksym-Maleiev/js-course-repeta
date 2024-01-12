
/*
 * Робимо slug в URL із назви статті (наприклад на dev.to)
 * Заголовок статті складається тільки з літер та пробілів
 *
 * - Нормалізуємо рядок
 * - Розбиваємо за словами
 * - Зшиваємо в рядок з роздільниками
 */

// Повинно вийти top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

/*
const nomalizedTitle = title.toLowerCase();
console.log(nomalizedTitle);

const words = nomalizedTitle.split(' ');
console.log(words);

const slug = words.join('-');
console.log(slug);
*/

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);