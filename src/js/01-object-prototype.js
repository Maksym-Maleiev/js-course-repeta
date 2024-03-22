/*
 * Прототип об'єкта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] та __proto__
 * - Object.getPrototypeOf()
 * - Власні властивості і Object.prototype.hasOwnProperty()
 * - Ланцюжок прототипів
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({
//   message: 'Ця властивість об`єкта протортипу',
// });
// dummyObj.message = 'Це властивість об`єкта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

// 'Це власне властивість об'єкта'
// 'Ця властивість на об'єкті-прототипі'

/*
 * Алгоритм пошуку властивості в ланцюжку прототипів:
 * 1. Пошук починається у власних властивостях
 * 2. Якщо властивості немає у власних, пошук переходить до ланцюжка прототипів
 * 3. Пошук припиняється при першому збігу (є така властивість)
 * 4. Повертається значення якості
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);
