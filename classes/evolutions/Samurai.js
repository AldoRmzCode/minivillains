const Evolution = require("./Evolution");

const Knight = require("./Knight");
const Vampire = require("./Vampire");
class Samurai extends Evolution {
    constructor() {
        super();
        this.name = "samurai";
        this.abilityDuration = 3000;
        this.abilityCooldown = 6000;
        this.subEvolutions = [20000, new Knight(), new Vampire()];
    }
    default() {
        return {
            speed: 1,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 1,
        };
    }
    ability() {
        return {
            speed: 1.5,
            power: 1,
            resistance: 1.1,
            damage: 1.25,
            damageCooldown: 1,
        };
    }
}
module.exports = Samurai;
