import fn from '../src';

describe('Normal test cases', () => {
  test('number is equal 0/10/100/1000/10000', () => {
    expect(fn(0)).toEqual([0]);
    expect(fn(10)).toEqual([10, 0]);
    expect(fn(30)).toEqual([30, 0]);
    expect(fn(40)).toEqual([40, 0]);
    expect(fn(50)).toEqual([50, 0]);
    expect(fn(60)).toEqual([60, 0]);
    expect(fn(70)).toEqual([70, 0]);
    expect(fn(80)).toEqual([80, 0]);
    expect(fn(90)).toEqual([90, 0]);
    expect(fn(100)).toEqual([100, 0, 0]);
    expect(fn(1000)).toEqual([1000, 0, 0, 0]);
    expect(fn(10000)).toEqual([10000, 0, 0, 0, 0]);
  });

  test('number < 1-9', () => {
    for (var i = 0; i < 10; i++) {
      expect(fn(i)).toEqual([i]);
    }
  });

  test('number < 10-99', () => {
    expect(fn(12)).toEqual([10, 2]);
    expect(fn(89)).toEqual([80, 9]);
  });

  test('number < 100-9999', () => {
    expect(fn(112)).toEqual([100, 10, 2]);
    expect(fn(102)).toEqual([100, 0, 2]);
    expect(fn(998)).toEqual([900, 90, 8]);
    expect(fn(1024)).toEqual([1000, 0, 20, 4]);
  });
});
