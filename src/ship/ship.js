/* eslint no-underscore-dangle: 0 */

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.damage = 0;
    this.coordinates = [];
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

  get coordinates() {
    return this._coordinates;
  }

  set coordinates(newCoords) {
    this._coordinates = newCoords;
  }

  isHit(coord) {
    return this.coordinates.includes(coord);
  }
}

export default Ship;
