/*
 * Основи ООП: клас, екземпляр (об'єкт), інтерфейс
 */

/*
 * Функції-конструктори
 * - Іменування
 * - Оператор new
 * - Властивість Function.prototype
 */

// const Car = function ({ brand, model, price } = {}) {
//   // 2. Функція викликається у контексті створеного об'єкта,
//   // тобто в this записується посилання на нього
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };

//   //  3. У властивість this.__proto__ записується посилання на об'єкт
//   // Car.prototype, себто Car.prototype це ПРОТОТИП майбутнього об'єкта

//   // 4. Посилання на об'єкт повертається на місце виклику new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// // 1. Якщо функція викликається через new, створюється пустий об'єкт
// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// console.log(myCar);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ email: 'mango@mail.com', password: 'qweqwe' });

mango.changeEmail('mango-new@mail.com');
// console.log(mango);

/*
 * Статичні властивості та методи
 * - Статичні властивості та методи доступні тільки на самому конструкторі
 * - У статичних методах не потрібен цей
 */

User.message =
  'Я статична властивість, мене немає на екземплярах або в прототипі.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Пошта:', obj.email);
  console.log('Пароль:', obj.password);
};

User.logInfo(mango);

// 1. Кожен об'єкт має властивість __proto__
// 2. У цій властивості лежить посилання на його ПРОТОТИП, тобто інший об'єкт
// 3. При створенні літерала об'єкта, як __proto__ записується посилання на Функція.prototype

const ObjA = {
  x: 5,
};

console.log(ObjA.__proto__ === Object.prototype);

// 4. Функція-конструктор це функція :)
// 5. Всю магію робить оператор new
// 6. Якщо функція викликається через new, створюється порожній об'єкт
// 7. Функція викликається у контексті створеного об'єкта
// 8. У властивість this.__proto__ записується посилання на об'єкт Функція.prototype
// 9. Посилання на об'єкт повертається на місце виклику new Функція()
