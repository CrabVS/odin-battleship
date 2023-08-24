import Ship from '../ship/ship';

// const currentShip = null;

// const shipList = [
//   { name: 'carrier', length: 5 },
//   { name: 'battleship', length: 4 },
//   { name: 'cruiser', length: 3 },
//   { name: 'submarine', length: 3 },
//   { name: 'destroyer', length: 2 },
// ];

class Gameboard {
  constructor() {
    this.ships = [];
    this.tiles = [];
  }

  getShips() {
    return [...this.ships];
  }

  createShip(name, coords) {
    const ship = new Ship(name, coords);
    this.ships.push(ship);
  }

  displayShip(ship) {
    ship.coordinates.forEach((c) => {
      this.tiles[c].classList.add('ship');
    });
  }

  findShipIndex(c) {
    for (let i = 0; i < this.ships.length; i += 1) {
      if (this.ships[i].coordinates.includes(c)) return i;
    } return null;
  }

  deleteShip(i) {
    this.ships.splice(i, 1);
  }

  receiveAttack(c) {
    const i = this.findShipIndex(c);
    if (i) this.ships[i].hit();
  }

  // a receiveAttack func to check if ship was hit or not and to update the tile
  // report if all ships were hit or not
}

export default Gameboard;
