class Calculator {
    firstParameter: number;
    secondParameter: number;

    constructor(firstParameter: number, secondParameter: number) {
        this.firstParameter = firstParameter;
        this.secondParameter = secondParameter;
    }

    getResultAddition() {
        const expectedResult: number = this.firstParameter + this.secondParameter;
        return expectedResult === 8 ? "Test passed" : "Test failed";
    }

    getResultAdditionNegative() {
        const expectedResult: number = this.firstParameter + this.secondParameter;
        return expectedResult === 10 ? "Test passed" : "Test failed";
    }

    getResultSubtraction() {
        const expectedResult: number = this.firstParameter - this.secondParameter;
        return expectedResult === -2 ? "Test passed" : "Test failed";
    }

    getResultSubtractionNegative() {
        const expectedResult: number = this.firstParameter - this.secondParameter;
        return expectedResult === -2 ? "Test passed" : "Test failed";
    }

    getResultMultiplication() {
        const expectedResult: number = this.firstParameter * this.secondParameter;
        return expectedResult !== 15 ? "Test failed" : "Test passed";
    }

    getResultMultiplicationNegative() {
        const expectedResult: number = this.firstParameter * this.secondParameter;
        return expectedResult !== 15 ? "Test failed" : "Test passed";
    }

    getResultDivision() {
        const expectedResult: number = this.firstParameter / this.secondParameter;
        return expectedResult !== 0.6 ? "Test failed" : "Test passed";
    }

    getResultDivisionNegative() {
        const expectedResult: number = this.firstParameter / this.secondParameter;
        return expectedResult !== 0.6 ? "Test failed" : "Test passed";
    }

    getResultExponentiation() {
        const expectedResult: number = this.firstParameter ** this.secondParameter;
        return expectedResult !== 243 ? "Test failed" : "Test passed";
    }

    getResultExponentiationNegative() {
        const expectedResult: number = this.firstParameter ** this.secondParameter;
        return expectedResult !== 243 ? "Test failed" : "Test passed";
    }
}

const multiplication = new Calculator(3, 5);
const multiplicationNegative = new Calculator(10, 5);
const subtraction = new Calculator(3, 5);
const subtractionNegative = new Calculator(10, 5);
const addition = new Calculator(3, 5);
const additionNegative = new Calculator(4, 5);
const division = new Calculator(3, 5);
const divisionNegative = new Calculator(10, 5);
const exponentiation = new Calculator(3, 5);
const exponentiationNegative = new Calculator(10, 5);
console.log(addition.getResultAddition());
console.log(additionNegative.getResultAdditionNegative());
console.log(subtraction.getResultSubtraction());
console.log(subtractionNegative.getResultSubtractionNegative());
console.log(multiplication.getResultMultiplication());
console.log(multiplicationNegative.getResultMultiplicationNegative());
console.log(division.getResultDivision());
console.log(divisionNegative.getResultDivisionNegative());
console.log(exponentiation.getResultExponentiation());
console.log(exponentiationNegative.getResultExponentiationNegative());
