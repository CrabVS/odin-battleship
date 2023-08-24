class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
  }

  swapTurn() {
    this.turn = !this.turn;
  }

  isTurn() {
    return this.turn;
  }
}

export default Player;
