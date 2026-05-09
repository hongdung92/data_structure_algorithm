function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null
    }
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum

    for (let j = num; j < arr.length; j++) {
        tempSum = maxSum - arr[j-num] + arr[j]
        maxSum = maxSum
        if (tempSum > maxSum) {
            maxSum = tempSum
        }

    }

    return maxSum
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))