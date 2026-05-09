## 1. Sliding Window pattern

* Thường được dùng khi cần tìm 1 tập hợp con liên tiếp (continuous subset) trong một cấu trúc dữ liệu như array hoặc string

* Ý tưởng chính
    * Tạo 1 "window" (có thể là 1 biến, 1 mảng con, hoặc 1 chuỗi con) để theo dõi 1 tập hợp liên tiếp các phần tử
    * Sliding Window (thường từ trái sang phải) dựa trên một điều kiện cụ thể, điều chỉnh kích thước hoặc vị trí của "window" nếu cần
    * "Window" có thể có kích thước cố định hoặc thay đổi tuỳ thuộc vào bài toán

* Khi nào sử dụng
    * Khi cần tìm một tập hợp con liên tiếp thoả mãn một điều kiện (ví dụ: tổng lớn nhất, chuỗi ký tự không lặp lại dài nhất)
    * Thường áp dụng cho array hoặc string
    * Không yêu cầu array phải sắp xếp

* Ưu điểm
    * Giảm BigO từ O($n^2$) xuống O(n)

## 2. Bài toán: Max SubArray Sum

* Viết function `maxSubarraySum` nhận vào 1 mảng số nguyên  và một số `n`
* Function trả về tổng lớn nhất của `n` phần tử liên tiếp trong mảng. Nếu không đủ `n` phần tử hoặc rỗng, trả về `null`

* Ý tưởng
    * Tạo 1 "window" có kích thước cố định `n` để tính tổng của `n` phần tử liên tiếp đầu tiên
    * Thay vì tính lại tổng cho mỗi window mới, chỉ cần:
        * Trừ phần tử đầu tiên của window trước
        * Cộng phần tử mới ở window cuối
    * So sánh tổng của mỗi windown vói tổng lớn nhất hiện tại