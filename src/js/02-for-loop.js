// Цикл for

/*
// i - означає ітерація
for (let i = 0; i < 10; i += 5){
  console.log(i);
}

for (let i = 50; i >= 0; i -= 5){
  console.log(i);
}
*/

// Pre-increment і Post-increment

/*
for (let i = 0; i < 10; i++){
  console.log(i);
}
*/

/*
let a = 10;
const b = ++a;

console.log(a);
console.log(b);
*/



// Напиши скрипт, який підраховує загальну суму зарплат працівників.
// Кількість працівників зберігається в перемінних employees.
// Зарплата кожного працівника це випадкове число від 500 до 5000
// Записати суму в змінну totalSalary і вивести в консоль

// 1. зробити var
const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;

// 2. перебрати працівників у циклі
for (let i = 1; i <= employees; i += 1){
  // 3. згенерувати випадкову зп
  let randomSalary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`ЗП працівник номер ${i} - ${randomSalary}`);
  // 4. додати до totalSalary
  totalSalary += randomSalary;
}

// 5. лог
console.log('totalSalary:', totalSalary);

// Напиши скрипт, який підраховує суму всіх парних чисел,
// які входять діапазон чисел змінних від min до max.
// Наприклад, якщо min = 0 і max = 5, то діапазон 0-5,
// і в ньому два парних числа - 2 та 4, їх сума 6.

// 1. зробити var
const min = 6;
const max = 13;
let total = 0;

/*
// 2. перебрати числа від min до max у циклі
for (let i = min; i <= max; i += 1){
// 3. перебрати тільки парні числа
  if (i % 2 === 0) {
    console.log(`число: ${i}`);
    // 4. написати суму парних чисел 
    total += i;
  }
}

// 5. написати лог
console.log('total:', total);
*/

// другий варіант рішення =>

// 2. перебрати числа від min до max у циклі
for (let i = min; i <= max; i += 1){
// 3. перевіряємо ділення на залишок 
  if (i % 2 !== 0) {
    console.log(`не парне число: ${i}`);
    continue;
  }
  console.log(`число парне: ${i}`);
    // 4. написати суму парних чисел 
    total += i;
}

// 5. написати лог
console.log('total:', total);