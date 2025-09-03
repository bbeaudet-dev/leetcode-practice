// FizzBuzz 
// print numbers 1–100
// replace multiples of 3 with "Fizz", 5 with "Buzz", and both with "FizzBuzz".

function FizzBuzz(numLimit) {
    const numsArray: string[] = []
    for (let i = 1; i < numLimit + 1; i++) {
        let str = ""
        if (i % 3 === 0) str += "Fizz"
        if (i % 5 === 0) str += "Buzz"
        if (str === "") str += i
        numsArray.push(str)
    }
    return numsArray
}

console.log(FizzBuzz(100))