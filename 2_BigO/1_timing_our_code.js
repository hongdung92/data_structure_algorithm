// Viết function tính tổng các số từ 1 đến n

// Giải pháp 1: Dùng vòng lặp
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(10));
//Big O:
//     Time complexity: O(n) vì vòng lặp thực hiện n phép cộng
//     Space complexity: O(1) - chỉ sử dụng 1 biến total, không tạo thêm dữ liệu phụ thuộc vào n


// Giải pháp 1: Dùng công thức toán học
function addUpToV2(n) {
    return n*(n+1)/2
}
console.log(addUpToV2(10));
// Big O:
//     Time complexity: O(1) - chỉ thực hiện 1 phép tính cố định, không phụ thuộc vào n
//     Space complexity: O(1) - không tạo thêm biến phụ thuộc vào n


// Hạn chế của việc đo bằng thời gian
//     - Không đáng tin cậy:
//         Thời gian chạy phụ thuộc vào phần cứng (máy mạnh/yếu), phần mềm và trạng thái máy tính
//         Cùng 1 máy, cùng code, thời gian chạy có thể thay đổi
//     - Khó diễn đạt và so sánh
//         Đo thời gian chỉ cho số liệu cụ thể,
//         không cung cấp một cách tổng quát để so sánh giữa các thuật toán


// Vai trò của Big O Notation
//     Giải quyết hạn chế trên
//     Mô tả tốc độ tăng trưởng của thuật toán, khi kích thước đầu vào (n) tăng,
//     không phụ thuộc vào phần cứng
//     Dễ so sánh: Gán nhãn Big O để biết thuật toán nào hiệu quả hon
//     Không cần đo thời gian: Chỉ cần phân tính code để xác định Big O


