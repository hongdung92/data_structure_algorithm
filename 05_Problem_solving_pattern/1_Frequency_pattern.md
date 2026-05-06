## 1. Frequency Counter Pattern
### Ý tưởng chính
* Thay vì sử dụng các vòng lặp lồng nhau (nested loop) để so sánh các phần tử, ta tạo 1 object để lưu trữ tần suất của các giá trị trong dữ liệu
* Sau đó sử dụng object này để kiểm tra hoặc so sánh  với dữ liệu khác
* Điều này giúp giảm BigO từ O($n^2$) xuống O(n)

### Khi nào sử dụng?
* So sánh 2 tập hợp dữ liệu (array, string) để kiểm tra chúng có chứa các giá trị giống nhau không (như kiểm tra anagram)
* Kiểm tra tần suất xuất hiện của các phần tử
* Xác định xem 1 tập hợp có phải là tập hợp con hoặc hoán vị của tập hợp khác hay không

## 2. Bài toán
* Viết 1 function `same` nhận vào 2 array (`arr1` và `arr2`)
* Function trả về
    * `true` nếu mọi giá trị trong `arr1` có giá trị bình phương tương ứng trong `arr2`, với tấn suất xuất hiện giống nhau
    * `false` nêu không thoả mãn
* Ví dụ
    * `same([1, 2, 3], [4, 1, 9])` -> `true`, vì $1^2$ = 1, $2^2$ = 4, $3^2$ = 9, đều có trong `arr1`
    * `same([1, 2, 3], [1, 9]) -> `false`