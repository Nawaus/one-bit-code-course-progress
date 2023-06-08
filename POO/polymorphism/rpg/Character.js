class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = attackPts;
  }

  attack(targetCharacter) {
    targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts;
  }
}

module.exports = Character;
