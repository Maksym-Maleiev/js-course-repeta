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