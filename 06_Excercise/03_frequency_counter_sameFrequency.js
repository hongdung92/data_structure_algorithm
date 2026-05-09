
/**
Frequency Counter - sameFrequency
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

 */

function sameFrequency(num1, num2) {
    num1 = num1.toString()
    num2 = num2.toString();
    if (num1.length != num2.length) {
        return false
    }

    let counter = {};

    for (let digit of num1) {
        counter[digit] = (counter[digit] || 0) + 1
    }

    for (const digit of num2) {
        if (!counter[digit]) {
            return false
        }
        counter[digit]--
    }

    return true
}

console.log(sameFrequency(1822,2812));
