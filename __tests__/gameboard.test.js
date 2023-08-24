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

    expect(gameboard.findShipIndex(4)).toBe(0);
    expect(gameboard.findShipIndex(22)).toBe(1);
});

test('properly scans if has a ship and returns null if not', () => {
    const gameboard = createGameboard();

    expect(gameboard.findShipIndex(9)).toBe(null);
});

test('can remove a ship', () => {
    const gameboard = createGameboard();
    
    const i = gameboard.findShipIndex(22);
    expect(gameboard.findShipIndex(22)).not.toBe(null);
    gameboard.deleteShip(i);
    expect(gameboard.findShipIndex(22)).toBe(null);
});

test('can make a ship receive damage', () => {
    const gameboard = createGameboard();

    const i = gameboard.findShipIndex(22);
    const ships = gameboard.getShips();
    gameboard.receiveAttack(22);
    expect(ships[i].getDamage()).toBe(1);
});

test('other ships do not receive damage', () => {
    const gameboard = createGameboard();
    const ships = gameboard.getShips();
    
    gameboard.receiveAttack(22);
    expect(ships[0].getDamage()).toBe(0);
    expect(ships[1].getDamage()).toBe(1);
});

test('to not receive damage', () => {
    const gameboard = createGameboard();
    const ships = gameboard.getShips();

    gameboard.receiveAttack(10);
    ships.forEach(ship => {
        expect(ship.getDamage()).toBe(0);
    });
});

test('attack hit a ship', () => {
    const gameboard = createGameboard();

    expect(gameboard.receiveAttack(22)).toBeTruthy();
});

test('attack didnt hit a ship', () => {
    const gameboard = createGameboard();

    expect(gameboard.receiveAttack(10)).toBeFalsy();
});
