const waterbombs = require('./waterbombs');

describe('Story 1', () => {
  it('UAT1.1: User can pass "x",1 - it should return 1', () => {
    expect(waterbombs('x')).toBe(1);
  });
  it('UAT1.2 -  User can pass "Y",1 - it should return 0', () => {
    expect(waterbombs('Y')).toBe(0);
  });
  it('UAT1.3 -  User can pass "xY",1 - it should return 1', () => {
    expect(waterbombs('xY')).toBe(1);
  });
});
