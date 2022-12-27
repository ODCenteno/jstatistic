function leapYearCalculator(yearInput) {
  let isLeapYear = false;

  if (yearInput % 4 === 0) {
    console.log(`${yearInput} es divisible entre 4`);
    if (yearInput % 100 === 0) {
      console.log(`${yearInput} es divisible entre 100`);
      if (yearInput % 400 === 0) {
        console.log(`${yearInput} es divisible entre 400`);
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
    }
  } else {
    console.log(`${yearInput} no es divisible entre 4, no es bisiesto`);
  }

  return isLeapYear;
}

module.exports = leapYearCalculator;
