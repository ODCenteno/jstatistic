const calcReducedPrice = require('./percentages');

describe('Test suite for percentages calculations', () => {
  test('Should get the discounted price equal to 102', () => {
    // Arr
    // Act
    const finalPrice = calcReducedPrice(120, 15);
    // Assert
    expect(finalPrice).toEqual(102);
  });
});
