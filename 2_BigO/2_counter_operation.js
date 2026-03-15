// Bài toán tìm số lớn nhất trong array
// Function 1: Duyệt tuyến tính

function findMax(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([1, 4, 8, 6]))
// n-1 phép so sánh arr[i] > max
// n-1 phép gán max = arr[i]
// Tổng: ~2n phép toán -> O(n)

// Function 2: Dùng Math.max
function findMaxV2(arr){
    return Math.max(...arr)
}
console.log(findMaxV2([1, 4, 8 ,6]));

// Phép toán Math.max() duyệt quả mảng n lần -> n phép toán -> O(n)
// Cả 2 đều là O(n) nhưng Function 2 có thể nhanh hơn 1 chút do tối ưu hoá trong Javscript
