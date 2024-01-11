/*
 * Знайомство з масивами
 * - Оголошення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Перевизначення
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'Max';
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача за посиланням та за значенням
 * - Примітиви та складні типи
 * - Посилальна рівність (referential equality)
 */

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);

// ---------------

// const a = [1, 2, 3];
// const b = a;

// console.log(a);
// console.log(b);

// a[0] = 500;

// console.log(a);
// console.log(b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебір (ітерація) масиву
 * - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого міняти не потрібно
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1){
//   friends[i] += '-1';
// }

// console.table(friends);

// -----------------

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//   console.log(friend);
// }

