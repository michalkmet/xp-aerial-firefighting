const waterbombs = require('./waterbombs');

describe('Story 1', () => {
  it('UAT1.1: User can pass "x",1 - it should return 1', () => {
    expect(waterbombs('x', 1)).toBe(1);
  });
  it('UAT1.2 -  User can pass "Y",1 - it should return 0', () => {
    expect(waterbombs('Y', 1)).toBe(0);
  });
  it('UAT1.3 -  User can pass "xY",1 - it should return 1', () => {
    expect(waterbombs('xY', 1)).toBe(1);
  });
  it('UAT1.4 -  User can pass "Yx",2 - it should return 1', () => {
    expect(waterbombs('Yx', 2)).toBe(1);
  });
  it('UAT1.5 -  User can pass "YY",2 - it should return 0', () => {
    expect(waterbombs('YY', 2)).toBe(0);
  });
  it('UAT1.6 -  User can pass "xx",2 - it should return 1', () => {
    expect(waterbombs('xx', 2)).toBe(1);
  });
  it('UAT1.7 -  User can pass "xx",3 - it should return 1', () => {
    expect(waterbombs('xx', 3)).toBe(1);
  });
});

describe('Story 2', () => {
  it('UAT2.1 -  User can pass "xx",1 - it should return 2', () => {
    expect(waterbombs('xx', 1)).toBe(2);
  });
});
