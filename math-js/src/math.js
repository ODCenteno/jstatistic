const squareSideLenght = 5;

function calculateSquare(sideA = null) {
  return {
    perimeterSquare: sideA * 4,
    areaSquare: sideA ** 2,
  };
}

console.log(calculateSquare(squareSideLenght));

const triangleSide1 = 16;
const triangleSide2 = 8;
const triangleSideBase = 10;
const triangleSideHeight = 5.5;

function isocelesTriangleAltitude(side, base) {
  const altitudeIsocelesTriangle = Math.sqrt((side ** 2) - ((base ** 2) / 4)).toFixed(2);
  console.log(`La altura del triángulo isóceles es: ${altitudeIsocelesTriangle}`);
  return altitudeIsocelesTriangle;
}

function scaleneTriangleHeight(sideA, sideB, base) {
  console.log({ sideA, sideB, base });
  const x = ((sideB ** 2) - (sideA ** 2) + (sideB ** 2)) / (2 * base);
  console.log(`la constante x es igual a: ${x}`);
  const altitudeScaleneTriangle = Math.floor(Math.sqrt(sideB ** 2 - x ** 2));
  console.log(`La altura del triángulo escaleno es: ${altitudeScaleneTriangle}`);
  return altitudeScaleneTriangle;
}

function calcularTriangulo(lado1, lado2, base, altura) {
  if (lado1 === lado2 && lado1 === base) {
    return false;
  }
  if (lado1 === lado2 && lado1 !== base) {
    return isocelesTriangleAltitude(lado1, base);
  }
  if (lado1 !== lado2 && lado1 !== base) {
    return scaleneTriangleHeight(lado1, lado2, base);
  }
  return {
    perimeterTriangle: lado1 + lado2 + base,
    areaTriangle: (base * altura) / 2,
  };
}

console.log(calcularTriangulo(triangleSide1, triangleSide2, triangleSideBase, triangleSideHeight));

const ratioCirculo = 3;
const diametroCirculo = ratioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
circunferencia.toFixed(1);
const areaCirculo = (ratioCirculo ** 2) * PI;
Math.floor(areaCirculo);

function calculateCircle(ratio) {
  const diameter = ratio * 2;
  const squareRatio = ratio ** 2;

  return {
    circunferencia: diameter * Math.PI,
    areaCirculo: squareRatio * Math.PI,
  };
}

console.log(calculateCircle(5));

module.exports = calcularTriangulo;
