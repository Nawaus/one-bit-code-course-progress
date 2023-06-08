const Character = require("./Character.js");

class Thief extends Character {
  attackEnemy(targetCharacter) {
    targetCharacter.lifePts -=
      (this.attackPts - targetCharacter.defensePts) * 2;
  }
}

module.exports = Thief;
