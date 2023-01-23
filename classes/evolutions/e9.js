const Evolution = require("./Evolution");
class e9 extends Evolution {
    constructor() {
        super();
        this.name = "e9";
        this.abilityDuration = 3000;
        this.abilityCooldown = 9000;
        this.subEvolutions = [];
    }
    default() {
        return {
            speed: 0.5,
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
module.exports = e9