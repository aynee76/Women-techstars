// 1. Create a function that checks if the input/parameter is an even number

function isEven(num) {
    return num % 2 == 0
}

console.log(isEven(6))

// 2. create a function that prints to the console n1 to n2 where n1 is the first input and n2 is the second input 

function numWithin(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        console.log(i)
    }
}
console.log(numWithin(5, 15))

// 3. create a function that sum the values in between two numbers.

function sumWithin(a, b) {
    let sum = 0

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumWithin(3, 8))