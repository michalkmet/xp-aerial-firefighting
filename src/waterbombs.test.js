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
  it('UAT2.2 -  User can pass "Yxx",1 - it should return 2', () => {
    expect(waterbombs('Yxx', 1)).toBe(2);
  });
  it('UAT2.3 -  User can pass "xYx",1 - it should return 2', () => {
    expect(waterbombs('xYx', 1)).toBe(2);
  });
  it('UAT2.4 -  User can pass "YYYxx",1 - it should return 2', () => {
    expect(waterbombs('YYYxx', 1)).toBe(2);
  });
  it('UAT2.5 -  User can pass "xYx",2 - it should return 2', () => {
    expect(waterbombs('xYx', 2)).toBe(2);
  });
  it('UAT2.6 -  User can pass "xxYxx",2 - it should return 2', () => {
    expect(waterbombs('xxYxx', 2)).toBe(2);
  });
});

describe('Story 3', () => {
  it('UAT3.1 -  User can pass "xxYxxYxx",2 - it should return 3', () => {
    expect(waterbombs('xxYxxYxx', 2)).toBe(3);
  });
  it('UAT3.2 -  User can pass "YYYxxx",1 - it should return 3', () => {
    expect(waterbombs('YYYxxx', 1)).toBe(3);
  });
});
