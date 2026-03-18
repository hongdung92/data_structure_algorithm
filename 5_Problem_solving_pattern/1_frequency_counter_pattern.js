// Sử dụng dụng 1 object để đếm tần suất xuất hiệ của các giá trị trong một tập hợp dữ liệu
// Ý tưởng: Thay vì sử dụng các nested loop để so sánh các phần tử, giátrị
// bạn tạo 1 object để lưu trữ tần suất của các giá trị trong dữ liệu.
// Sau đó sử dụng object này để kiểm tra hoặc so sánh với dữ liệu khác.
// Giúp giảm O(n^2) xuống O(n)

// Viết hàm same nhận vào 2 Array
// Hàm trả về true nếu mọi giá trị trong arr1 có giá trị bình phương tương ứng trong arr2,
// với tần suất xuất hiện giống nhau
// false nếu không thoả mãn
// Ví dụ [1, 2, 3] & [4, 1, 9] -> true vì 1^2 = 1, 2^2 = 4, 3^2 =9

// Cách 1
// Vì bản chất indexOf là O(n)
// nên Cách 1 là O(n^2)
// Với 1000 phần tử thì có 1000^2 = 1.000.000 phép tính
function same(arr1, arr2)
{
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let val of arr1) {
        console.log({arr2});
        let index = arr2.indexOf(val * val);
        if (index === -1) {
            return false
        }
        arr2.splice(index, 1);
    }
    return true;
}
console.log(same([1, 2, 3], [4, 1, 9]))


console.log("====================================================================================");


// Cách 2
// Chỉ 3 vòng lặp, với 1.000 phần tử chỉ có 3000 phép tính nhỏ hơn nhiều so với 1 triệu
// O(n)
function sameV2(arr1, arr2)
{
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (const val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (const val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log({frequencyCounter1, frequencyCounter2});

    for (const key in frequencyCounter1) {
        if (!(key * key in frequencyCounter2)) {
            console.log(key);

            return 111
        }
        if (frequencyCounter2[key*key] !== frequencyCounter1[key]) {
            return 222;
        }
    }
    return true;
}

console.log(sameV2([1, 2, 4], [1, 4, 9]))


console.log("====================================================================================");

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter = {};
    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    }

    for (let char of str2) {
        if (!frequencyCounter[char]) {
            return false;
        }
        frequencyCounter[char] -= 1;
    }

    console.log({frequencyCounter});



    return true;
}

console.log(validAnagram('zaa', 'aza'));
