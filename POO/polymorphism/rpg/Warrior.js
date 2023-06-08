const Character = require("./Character");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.stance = "attacking";
  }

  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defensePts += this.defensePts;
    } else {
      this.stance = "attacking";
      this.defensePts -= this.defensePts;
    }
  }
}

module.exports = Warrior;
