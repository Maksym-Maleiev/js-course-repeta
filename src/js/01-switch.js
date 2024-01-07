// Напиши скрипт вибору вартості готелю за кількістю зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо у змінній stars щось крім чисел 1-5, виведи рядок
// 'Такої кількості зірок немає'


/*
const stars = 1;
let price;
*/

/*
if (stars === 1) {
  price = '20$';
} else if (stars === 2) {
  price = '30$';
} else if (stars === 3) {
  price = '50$';
} else if (stars === 4) {
  price = '70$';
} else if (stars === 5) {
  price = '120$';
} else {
  console.log('Такої кількості зірок немає');
}
*/

// вирішуєм завдяння за допомогою 'switch'

/*
switch (stars) {
  case 1:
    price = '20$';
    break;
  
  case 2:
    price = '30$';
    break;
  
  case 3:
    price = '50$';
    break;

  case 4:
    price = '70$';
    break;
  
  case 5:
    price = '120$';
    break;
  
  default:
    console.log('Такої кількості зірок немає');
}

console.log('price:', price);
*/

// Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
// 1,2 - 20$, 3,4 - 30$, 5 - 120$

/*
const stars = 4;
let price;
*/

/*
if (stars === 1 || stars === 2) {
  price = '20$';
} else if (stars === 3 || stars === 4) {
  price = '30$';
} else if (stars === 5) {
  price = '120$';
} else {
  console.log('Такої кількості зірок немає');
}
*/

// вирішуєм завдяння за допомогою 'switch'

/*
switch (stars) {
  case 1:
  case 2:
    price = '20$';
    break;
  
  case 3:
  case 4:
    price = '30$';
    break;
  
  case 5:
    price = '120$';
    break;
  
  default:
    console.log('Такої кількості зірок немає');
}

console.log('price:', price);
*/

// Напиши скрипт выбора опции доставки товара.
// Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
// В переменную message записать сообщение в зависимости от опции.
// - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
// - 'Курьер доставит заказ завтра с 9:00 до 18:00'
// - 'Посылка будет отправлена сегодня'
// - 'Вам перезвонит менеджер'

// 1. зробити змінні
const option = 4;
let message;

// 2. зробити switch 1.2.3
// 3. у кожногму кейсі пишемо message рядок
switch (option) {
  case 1:
    message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
    break;
  
  case 2:
    message = 'Кур`єр доставить замовлення завтра з 9:00 до 18:00 години';
    break;
  
  case 3:
    message = 'Посилку буде відправлено сьогодні Новою поштою';
    break;
  
  default:
    message = 'Вам передзвонить наш менеджер';
}

// 4. зробити лог message
console.log(message);