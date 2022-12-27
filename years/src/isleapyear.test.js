const isLeapYear = require('./isleapyear');

describe('Test suite for leap year calculator', () => {
  describe('Test for Leap Year', () => {
    test('Should be a true leap year for numbers divided by 400', () => {
      // Arrange
      // Act
      const rta = isLeapYear(2000);
      // Assert
      expect(rta).toBeTruthy();
    });
    test('Should be a false leap year for 2100', () => {
      // Arrange
      // Act
      const rta = isLeapYear(2100);
      // Assert
      expect(rta).toBeFalsy();
    });
    test('Should be a false leap year for 1998', () => {
      // Arrange
      // Act
      const rta = isLeapYear(1998);
      // Assert
      expect(rta).toBeFalsy();
    });
  });
});
