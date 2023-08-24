import Computer from "../src/player/computer/computer";

test('returns a random tile num', () => {
    const computer = new Computer('Computer');

    const move = computer.getMove();

    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThanOrEqual(100);
});