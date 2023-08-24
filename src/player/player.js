import Computer from './computer/computer';

class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
    this.computer = false;
  }

  swapTurn() {
    this.turn = !this.turn;
  }

  isTurn() {
    return this.turn;
  }

  addComputer() {
    this.computer = true;
    this.brain = new Computer('Computer');
  }

  isComputer() {
    return this.computer;
  }
}

export default Player;
