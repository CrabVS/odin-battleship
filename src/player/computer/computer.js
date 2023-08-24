class Computer {
  constructor(name) {
    this.name = name;
    this.shotTiles = [];
  }

  getMove() {
    let randTile = Math.floor(Math.random() * 100) + 1;

    while (this.shotTiles.includes(randTile)) {
      if (randTile === 100) randTile = 1;
      else randTile += 1;
    }

    this.shotTiles.push(randTile);
    return randTile;
  }
}

export default Computer;
