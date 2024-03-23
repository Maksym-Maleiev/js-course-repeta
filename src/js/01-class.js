/*
 * Класи
 * 🐷 - оголошення
 * 🐷 - конструктор
 * 🐷 - методи
 * 🐷 - static
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивості та методи класів
 * 🐷 - гетери та сетери
 */

class Car {
    static description = 'Клас, який описує автомобіль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    set model(newModel) {
        this._model = newModel;
    }

    get model() {
        return this._model;
    }
}

// console.dir(Car.description);

const carInstance = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });

console.log(carInstance.model);
carInstance.model = 'A6';
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);

console.log(carInstance);
