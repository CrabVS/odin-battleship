import Player from "../src/player/player";

test('is player turn', () => {
    const player = new Player('P1');

    player.swapTurn();
    expect(player.isTurn()).toBeTruthy();
});

test('is a computer', () => {
    const player = new Player('P1');

    player.addComputer();
    expect(player.isComputer()).toBeTruthy();
});
