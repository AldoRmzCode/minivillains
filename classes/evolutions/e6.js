const Evolution = require("./Evolution");
class e6 extends Evolution {
    constructor() {
        super();
        this.name = "e6";
        this.abilityDuration = 3000;
        this.abilityCooldown = 6000;
        this.subEvolutions = [];
    }
    default() {
        return {
            speed: 0.9,
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
module.exports = e6