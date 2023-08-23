//const sampleTest = require('../src/index');
import sampleTest from '../src/index';

test('returns works', () => {
    expect(sampleTest()).toBe('works');
})