## 1. Multiple pointer pattern
* Sử dụng nhiều con trỏ (pointer) để tham chiếu đến các vị trí hoặc chỉ số trong một cấu trúc dữ liệu tuyến tính (như array hoặc string)

* Ý tưởng chính
    * Tạo 1 hoặc nhiều biến (con trỏ) để theo dõi các vị trí trong array/string
    * Di chuyển các con trỏ này (thường hướng về nhau, cùng hướng, hoặc từ cuối về đầu) dựa trên một điều kiện cụ thể để tìm kiếm giá trị hoặc cặp giá trị thoả mãn yêu cầu

* Pattern này thường dùng để tìm cặp giá trị hoặc kiểm tra một điều kiện trong cấu trúc tuyến tính

* Khi nào sử dụng?
    * Khi dữ liệu đã được sắp xếp
    * Khi tìm cặp giá trị thoả mãn một điều kiện (ví dụ: tổng bằng 0, hoặc 1 giá trị cụ thể)
    * Thường áp dụng cho array, string hoặc linked list

* Ưu điểm
    * Giảm BigO từ O($n^2$) xuống O(n) trong nhiều trường hợp

## 2. Bài toán: sumZero
* Viết function `sumZero` nhận vào 1 array đã sắp xếp chứa các số nguyên. Tìm và trả về cặp đầu tiên có tổng bằng 0. Nếu không tìm thấy, trả về `undefined`

* Ý tưởng
    * Sử dụng 2 pointer
        * `left`: Bắt đầu từ đầu array (index = 0, chứa số nhỏ nhất)
        * `right`: Bắt đầu từ cuối array (index = array.lengh -1, chứa số lớn nhất)
    * Tính tổng `array[left] + array[right]` và điều chỉnh pointer dựa trên kết quả
        * Nếu tổng bằng 0 -> trả về `[array[left], array[right]]`
        * Nếu tổng > 0 -> di chuyển `right` sang trái (giảm giá trị lớn)
        * Nếu tổng < 0 -> di chuyển `right` sang phải (tăng giá trị nhỏ)
    * Lặp lại cho đến khi `left >= right` (2 pointer gặp nhau) -> trả về `undefined`

## 3. Bài toán: Count Unique Values
* Viết function `countUniqueValues` nhận vào 1 array đã sắp xếp, chứa các số nguyên. Funtion trả về số lượng giá trị duy nhất trong array
* Ý tưởng
    * Sử dụng 2 pointer để duyệt qua array và đếm các giá trị duy nhất. 2 pointer bắt đầu từ cùng 1 phía và duy chuyển dựa trên điều kiện so sánh
    * Sử dụng 2 pointer (`i` và `j`) để duyệt array
        `i`: Theo dõi vị trí của giá trị duy nhất cuối cùng trong phần đầu của array
        `j`: Duyệt qua để tìm các giá trị mới (khác với giá tị tại `i`)
    * Khi `arr[j] != arr[i]`, di chuyển `i` lên và ghi đè giá trị mới (`arr[j]`) vào vị trí `i + 1`
    * Số lượng giá trị duy nhất sẽ bằng chỉ số của `i` cộng thêm ` (vì chỉ số bắt đầu từ 0)