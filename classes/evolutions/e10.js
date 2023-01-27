const Evolution = require("./Evolution");
class e10 extends Evolution {
    constructor() {
        super();
        this.name = "e10";
        this.abilityDuration = 3000;
        this.abilityCooldown = 15000;
        this.subEvolutions = [];
    }
    default() {
        return {
            speed: 0.3,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 1,
        };
    }
    ability() {
        return {
            speed: 1,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 1,
        };
    }
}
module.exports = e10