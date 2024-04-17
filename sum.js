function calculateSumOfNumbers(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Input must be a positive integer.";
    }
    let sum = 0
    let i = 1
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}
let inputNumber = 5
console.log("Sum of numbers from 1 to " + inputNumber + ": " + calculateSumOfNumbers(inputNumber));
