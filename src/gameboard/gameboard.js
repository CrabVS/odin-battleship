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

  // should be able to place ships at specific coordinates by calling ship factory
  // a receiveAttack func to check if ship was hit or not and to update the tile
  // report if all ships were hit or not
}

export default Gameboard;
