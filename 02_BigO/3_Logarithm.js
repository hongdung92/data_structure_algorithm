// Logarit là nghịch đảo của luỹ thừa
// Logarit đo số lần chia đôi 1 số trước khi nó nhỏ hơn hoặc bằng 1
// Ví dụ: n = 8 chia đôi 3 lần (8:2 = 4, 4:2 = 2, 2:2 = 1) -> log2(8) = 3

// O(log n) tăng rất chậm so với O(n) nên rất hiệu quả
// Tìm kiếm nhị phân
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return - 1
}

console.log(binarySearch([1, 3, 5, 7, 9], 3));

// Vì sao time complexity là O(log n)?
// Nguyên lý chia đôi
//     Mỗi 1 bước của binarySearch là loại bỏ 1 nửa không gian tìm kiếm (nửa trả hoặc nửa phải)
//     Ban đầu, không gian tìm kiếm là n phần tử (độ dài array)
//     Sau bước 1 còn n/2 phần tử
//     Sau bước 2 còn n/4 phần tử
//     Sau bước 3 còn n/8 phần tử
//     Sau bước k còn n/2^k phần tử

// Vòng lặp dùng khi không gian tìm kiếm còn <= 1 (left <= right)
// Điều này xảy ra khi n/2^k <= 1 => n <= 2^k
// => k = log2(n)
// => Số bước tối đa là khoảng log2(n)

// Với n = 1.000.000 phần tử
// log2(1.000.000) ~ 20
// Số bước tối đa là 20, rất nhỏ so với 1.000.000 của tìm kiếm tuyến tính

function linearSearch (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([1, 3, 5, 7, 9], 3))