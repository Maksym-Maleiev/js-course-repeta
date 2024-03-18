/*
 * Функція це окремий випадок об'єкта -> ПОСИЛУВАЛЬНИЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 * - Де і як була оголошена функція НЕ МАЄ НІЯКОГО ВПЛИВУ на контекст.
 * - Контекст визначається У МОМЕНТ ВИКЛИКУ ФУНКЦІЇ, якщо він не прив'язаний явно.
 */

/*
 * Як метод об'єкта. У тих об'єкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

/*
 * Виклик без контексту
 * - У строгому режимі = undefined
 * - Не в строгому режимі = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Як метод об'єкта, але оголошена як зовнішня функція.
 * У контексті об'єкта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

/*
 * Виклик без контексту, але оголошено як метод об'єкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст у callback-функціях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/*
 * Тренуємося 1
 */

const fn = function () {
    console.log('fn -> this', this);
};

// fn();

/*
 * Тренуємося 2
 */

const book = {
    title: 'React for beginners',
    showThis() {
        console.log('showThis -> this', this);
    },
    showTitle() {
        console.log('showTitle -> this.title', this.title);
    },
};

// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();

/*
 * Тренуємося 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red');

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue');

/*
 * Тренуємося 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); //  this ???

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange'); //  this ???

/*
 * Тренуємося 5
 */

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment); // при передачі метода об'єкта як callback - контекст не зберігається. Тому undefined
updateCounter(5, counter.decrement); // при передачі метода об'єкта як callback - контекст не зберігається. Тому undefined
