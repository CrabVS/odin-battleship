class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.damage = 0;
  }

  getDamage() {
    return this.damage;
  }

  hit() {
    this.damage += 1;
  }

  isSunk() {
    return this.damage === this.length;
  }
}

export default Ship;
