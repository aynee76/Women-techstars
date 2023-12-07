function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(6))


// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     sum += i
//     console.log(sum)
// }

function zee(num) {
    let result = 1
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result
}
console.log(zee(6))