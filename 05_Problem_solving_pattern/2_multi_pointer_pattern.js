// Native approach
function sumZero(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }

    return undefined
}

console.log(sumZero([-4, -3, -2, 0, 1, 2, 3, 5]))

console.log("========================================================")

// Multi pointer
function sumZeroV2(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        console.log(arr[left], arr[right]);
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++;
        }
    }


    return undefined;
}

console.log(sumZeroV2([-4, -3, -2, 0, 1, 2, 3, 5]))

console.log("========================================================")

function countUniqueValue(arr)
{
    if (arr.length === 0) {
        return 0;
    }
    let i = 0
    for (let j = 1; j <= arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i;
}

console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 13])); // [1, 2 ,3, 4, 5, 12, 13] = 7
