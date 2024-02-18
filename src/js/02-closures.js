/*
 * Функція результатом своєї роботи може повертати іншу функцію.
 *
 * Функція, що повертається під час виклику буде мати доступ
 * до всіх локальних змінних (області видимості)
 * Батьківської функції (той з якої її повернули),
 * це називається «замикання».
 */

const fnA = function (parameter) {
  const innerVariable = 'значення внутрішньої змінної функції fnA';

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('це виклик innerFunction');
  };

  return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
 * Кухарь
 */

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готує ${dish}`);
// };

// makeDish('Mango', 'пиріжок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлети');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кава');

const makeSheff = function (name) {
  const innerVar = 555;
  const message = 'hello';

  const makeDish = function (dish) {
    console.log(innerVar);
    console.log(message);
    console.log(`${name} готує ${dish}`);
  };

  return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлети');
// mango('пиріжок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

/*
 * Округлювач 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватні дані та функції - приховування реалізації, інтерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return 'Що це за фігня?';
      }
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Поточна зарплата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(100000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add: add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();

// console.log(myLib);
// console.log(myLib.getValue());

// myLib.add(10);
// console.log(myLib.getValue());
