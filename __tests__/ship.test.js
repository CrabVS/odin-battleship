import Ship from "../src/ship/ship";

test('can take a hit', () => {
    const ship = new Ship('Big Ship', 4);
    ship.hit();
    expect(ship.getDamage()).toBe(1);
});

test('can take multiple hits', () => {
    const ship = new Ship('Big Ship', 4);
    ship.hit();
    expect(ship.getDamage()).toBe(1);
    ship.hit();
    expect(ship.getDamage()).toBe(2);
});

test('can be sunk', () => {
    const ship = new Ship('Big Ship', 4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('is not sunk when not damaged enough', () => {
    const ship = new Ship('Big Ship', 4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test('coordinates start empty', () => {
    const ship = new Ship('Big Ship', 4);
    expect(ship.coordinates).toStrictEqual([]);
});

test('coordinates to be set to a new array', () => {
    const ship = new Ship('Big Ship', 4);
    ship.coordinates = [3, 4, 5, 6];
    expect(ship.coordinates).toStrictEqual([3, 4, 5, 6]);
});

test('if ship is hit by enemy', () => {
    const ship = new Ship('Big Ship', 4);
    ship.coordinates = [3, 4, 5, 6];
    expect(ship.isHit(4)).toBeTruthy();
});

test('if ship is not hit by enemy', () => {
    const ship = new Ship('Big Ship', 4);
    ship.coordinates = [3, 4, 5, 6];
    expect(ship.isHit(7)).toBeFalsy();
});