import Gameboard from "../src/gameboard/gameboard";

test('gameboard can add a ship', () => {
    const gameboard = new Gameboard();
    gameboard.createShip('Carrier', [4, 5, 6, 7, 8]);

    let ships = gameboard.getShips();
    expect(ships).toHaveLength(1);
    expect(ships[0]).toHaveProperty('name', 'Carrier');
    expect(ships[0]).toHaveProperty('coordinates', [4, 5, 6, 7, 8]);
});

test('gameboard can have multiple ships', () => {
    const gameboard = new Gameboard();
    gameboard.createShip('Carrier', [4, 5, 6, 7, 8]);
    gameboard.createShip('Battleship', [12, 22, 32, 42]);
    gameboard.createShip('Destroyer', [14, 15]);

    let ships = gameboard.getShips();
    expect(ships.length).toHaveLength(3);
    expect(ships[0]).toHaveProperty('name', 'Carrier');
    expect(ships[0]).toHaveProperty('coordinates', [4, 5, 6, 7, 8]);
    expect(ships[1]).toHaveProperty('coordinates', [12, 22, 32, 42]);
    expect(ships[2]).toHaveProperty('coordinates', [14, 15]);
});