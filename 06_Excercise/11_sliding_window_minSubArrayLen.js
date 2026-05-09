/**
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
 */

function minSubArrayLen(arr, target) {
    if (arr.length === 0) {
        return 0
    }

    let start = 0
    let end = 0
    let sum = 0
    let minLength = Infinity

    while (end < arr.length) {
        sum += arr[end]

        while (sum >= target) {
            let tmpMinLength = end - start + 1
            if (minLength > tmpMinLength) {
                minLength = tmpMinLength
            }
            sum -= arr[start]
            start++
        }

        end++;
    }

    return minLength == Infinity ? 0 : minLength
}

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

function minSubArrayLenV2(arr, target) {
    let start = 0
    let end = 0
    let sum = 0
    let minLength = Infinity

    while (start < arr.length) {

        if (sum < target) {
            sum += arr[end]
            end++
        } else {
            tmpLen = end - start
            if (minLength > tmpLen) {
                minLength = tmpLen
            }
            sum -= arr[start]
            start++
        }


        if (end > arr.length) {
            break;
        }
    }

    console.log(minLength == Infinity ? 0 : minLength);

    return minLength == Infinity ? 0 : minLength

}

minSubArrayLenV2([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLenV2([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLenV2([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLenV2([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLenV2([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLenV2([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLenV2([1,4,16,22,5,7,8,9,10],95) // 0
