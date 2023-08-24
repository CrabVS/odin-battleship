import Gameboard from "../src/gameboard/gameboard";

const createGameboard = function createGameboard() {
    const gameboard = new Gameboard();
    gameboard.createShip('Carrier', [4, 5, 6, 7, 8]);
    gameboard.createShip('Battleship', [12, 22, 32, 42]);
    gameboard.createShip('Destroyer', [14, 15]);

    return gameboard;
}

test('gameboard can add a ship', () => {
    const gameboard = new Gameboard();
    gameboard.createShip('Carrier', [4, 5, 6, 7, 8]);

    let ships = gameboard.getShips();
    expect(ships).toHaveLength(1);
    expect(ships[0]).toHaveProperty('name', 'Carrier');
    expect(ships[0]).toHaveProperty('coordinates', [4, 5, 6, 7, 8]);
});

test('gameboard can have multiple ships', () => {
    const gameboard = createGameboard();

    let ships = gameboard.getShips();
    expect(ships).toHaveLength(3);
    expect(ships[0]).toHaveProperty('name', 'Carrier');
    expect(ships[0]).toHaveProperty('coordinates', [4, 5, 6, 7, 8]);
    expect(ships[1]).toHaveProperty('coordinates', [12, 22, 32, 42]);
    expect(ships[2]).toHaveProperty('coordinates', [14, 15]);
});

test('can find a ship', () => {
    const gameboard = createGameboard();

    expect(gameboard.findShip(4)).toBe(0);
    expect(gameboard.findShip(22)).toBe(1);
});

test('properly scans if has a ship and returns null if not', () => {
    const gameboard = createGameboard();

    expect(gameboard.findShip(9)).toBe(null);
});