const Evolution = require("./Evolution");
class e10 extends Evolution {
    constructor() {
        super();
        this.name = "e10";
        this.abilityDuration = 3000;
        this.abilityCooldown = 5000;
        this.subEvolutions = [];
    }
    default() {
        return {
            speed: 0.3,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 6,
            scale: 2.15,
        };
    }
    ability() {
        return {
            speed: 1,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 3,
        };
    }
}
module.exports = e10