/*
 * Спадкування
 * - extends
 * - super()
 */

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} отримує ${amount} досвіду`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor(config) {
        super(config);
        console.log(config);
    }
}

const mango = new Warrior('mango', 1000);

console.log(mango);
