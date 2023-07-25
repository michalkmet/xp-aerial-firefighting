const waterbombs = require('./waterbombs');

describe('Story 1', () => {
  it('UAT1.1: User can pass "x",1 - it should return 1', () => {
    expect(waterbombs()).toBe(1);
  });
});
