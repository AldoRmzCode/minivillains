const Evolution = require("./Evolution");
class e7 extends Evolution {
    constructor() {
        super();
        this.name = "e7";
        this.abilityDuration = 3000;
        this.abilityCooldown = 7000;
        this.subEvolutions = [];
    }
    default() {
        return {
            speed: 0.8,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 1,
        };
    }
    ability() {
        return {
            speed: 1.2,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 1,
        };
    }
}
module.exports = e7