const calcularTriangulo = require('./math');

describe('Test suite for math operations', () => {
  describe('test for triangle altitude', () => {
    test('should calculate the altitud equal to 4', () => {
      const rta = calcularTriangulo(16, 8, 10);
      expect(rta).toEqual(4);
    });
    test('should return false if is a isosceles triangle', () => {
      const rta = calcularTriangulo(6, 6, 6);
      expect(rta).toBe(false);
    });
  });
});
