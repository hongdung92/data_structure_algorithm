function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null
    }

    tempSum = 0;
    maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    console.log({tempSum});

    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j]
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3))