# Problem Solving Approach

## Algorithm là gì?

Algorithm (thuật toán) là một **quy trình hoặc tập hợp các bước** để hoàn thành một nhiệm vụ nhất định.

- Không nhất thiết phải phức tạp - có thể là tính 100 số nguyên tố đầu tiên.
- Cũng có thể rất phức tạp - như thuật toán gợi ý quảng cáo của Instagram hay thuật toán tìm kiếm của Google.
- **Cốt lõi**: chỉ là một tập hợp các bước để hoàn thành một tác vụ.

---

## Tại sao cần biết về thuật toán?

- Hầu hết mọi thứ trong lập trình đều liên quan đến một thuật toán nào đó.
- Đặc biệt quan trọng trong **phỏng vấn kỹ thuật** - phải giải quyết bài toán chưa từng gặp trong một môi trường xa lạ.

---

## Làm thế nào để cải thiện kỹ năng giải quyết vấn đề?

1. **Devise a plan** - Xây dựng kế hoạch tiếp cận vấn đề (phần này).
2. **Master common problem solving patterns** - Nắm vững các mẫu giải thuật phổ biến (phần tiếp theo).

---

## Kế hoạch giải quyết vấn đề (Problem Solving Plan)

### Bước 1 - Understand the Problem (Hiểu vấn đề)

Đừng vội bắt tay vào code ngay. Hãy dừng lại và đảm bảo bạn thực sự hiểu bài toán.

> Nguồn cảm hứng: cuốn sách **"How to Solve It"** của George Polya - rất đáng đọc.

**Các câu hỏi cần tự hỏi (hoặc hỏi interviewer):**

1. **Có thể diễn đạt lại bài toán bằng lời của mình không?**
   - Không nhắc lại nguyên văn, hãy diễn đạt theo cách hiểu của bản thân.

2. **Input là gì?**
   - Kiểu dữ liệu: integer, float, string?
   - Giới hạn kích thước? (VD: số quá lớn trong JS sẽ trả về `Infinity`)
   - Có phải luôn luôn là 2 input không? Nếu thiếu input thì sao?

3. **Output là gì?**
   - Kết quả trả về có kiểu gì? integer, float, string?
   - Ví dụ: cộng hai số rất lớn có thể cần trả về string thay vì number.

4. **Từ input có thể xác định được output không?**
   - Có đủ thông tin để giải không?
   - VD: nếu chỉ có 1 input mà hàm cần 2, ta làm gì? Trả về `undefined`? Cộng với 0?

5. **Các dữ liệu quan trọng nên đặt tên gì?**
   - Xác định terminology ngay từ đầu để tránh nhầm lẫn.

**Ví dụ thực tế:** *"Viết hàm nhận 2 số và trả về tổng của chúng"*

| Câu hỏi | Trả lời |
|---|---|
| Diễn đạt lại | Implement hàm `add(a, b)` trả về tổng |
| Input | 2 số - integer hay float? Có thể chỉ có 1 số không? |
| Output | Một số - integer hay float? |
| Đủ thông tin? | Nếu thiếu 1 số thì trả về gì? |
| Đặt tên | `add(num1, num2)` → trả về `sum` |

### Bước 2 - Explore Concrete Examples (Khám phá các ví dụ cụ thể)

Sau khi hiểu vấn đề, hãy tạo ra các ví dụ cụ thể. Ví dụ giúp:
- Hiểu sâu hơn về bài toán.
- Kiểm tra lại giải pháp sau khi hoàn thành (sanity check).
- Phát hiện edge cases sớm.

> Tương tự **user stories** hay **unit tests** trong thực tế.

**Các bước khám phá ví dụ:**

1. **Bắt đầu với ví dụ đơn giản** - input dễ, output rõ ràng.
2. **Tiến đến ví dụ phức tạp hơn** - input có ký tự đặc biệt, số, khoảng trắng, hoa/thường...
3. **Khám phá edge cases với input rỗng** - trả về gì nếu không có input?
4. **Khám phá edge cases với input không hợp lệ** - input là số, object, null thì sao?

**Ví dụ thực tế:** *"Viết hàm nhận vào một string và trả về số lần xuất hiện của mỗi ký tự"*

```js
// Simple examples
charCount("aaaa")  // { a: 4 }
charCount("hello") // { h: 1, e: 1, l: 2, o: 1 }
// Câu hỏi: có trả về cả ký tự không có trong string không? (VD: { b: 0, c: 0, ... })

// Complex examples
charCount("my phone number is 123")
// Câu hỏi: có đếm khoảng trắng không? Đếm số không? Ký tự đặc biệt?

charCount("Hello Hi")
// Câu hỏi: 'H' và 'h' tính chung hay riêng? { H: 1, h: 1 } hay { h: 2 }?

// Empty input
charCount("")  // {} hay null hay undefined?
charCount()    // Trả về gì?

// Invalid input
charCount(123)  // Input không phải string thì sao?
charCount(null) // ?
```

### Bước 3 - Break It Down (Phân tách vấn đề)

Trước khi viết code, hãy **viết ra các bước cần làm dưới dạng comment** (không cần pseudocode hoàn chỉnh, không cần syntax hợp lệ).

**Tại sao?**
- Buộc bạn phải suy nghĩ trước khi code, tránh "free-wheeling".
- Trong phỏng vấn: cho interviewer thấy bạn có định hướng rõ ràng - đây là điều họ đánh giá cao.
- Giúp bạn phát hiện các phần còn chưa tự tin.
- Nếu hết giờ mà chưa xong, interviewer vẫn thấy được quá trình tư duy của bạn.

> Nhiều người không finish được bài nhưng vẫn được nhận vì họ thể hiện được **process** tốt.

**Ví dụ thực tế:** *"Viết hàm nhận vào string và trả về số lần xuất hiện của mỗi ký tự (chỉ alphanumeric, lowercase)"*

```js
function charCount(str) {
  // Tạo object để trả về

  // Lặp qua từng ký tự trong string
    // Nếu ký tự là chữ/số VÀ đã có trong object → tăng count lên 1
    // Nếu ký tự là chữ/số VÀ chưa có trong object → thêm vào, set giá trị = 1
    // Nếu ký tự là khoảng trắng, dấu câu, v.v. → bỏ qua

  // Trả về object
}
```

Chỉ cần viết đến đây là đã có đủ bộ khung để bắt đầu code thực sự.

### Bước 4 - Solve / Simplify (Giải quyết / Đơn giản hóa)

Nếu giải được toàn bộ thì giải. Nếu không, hãy **giải phần bạn biết trước**, bỏ qua phần khó tạm thời.

**Tại sao không nên "block" ở phần khó?**
- Trong phỏng vấn, ngồi im không làm gì trông rất tệ.
- Viết được 90% code → thể hiện năng lực tốt hơn là không viết gì.
- Thường khi bạn làm phần dễ, bạn sẽ **gain insight** về phần khó.

**Quy trình simplify:**
1. Xác định phần nào đang khiến bạn bị chặn.
2. Tạm thời bỏ qua phần đó.
3. Viết giải pháp cho phần còn lại.
4. Incorporate phần khó trở lại khi đã sẵn sàng.

**Ví dụ thực tế** với `charCount`:

```js
function charCount(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();

    // TẠM THỜI bỏ qua việc check alphanumeric
    // → giải quyết phần còn lại trước
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

// Kết quả này đã đúng 90%:
// - Đã xử lý lowercase ✓
// - Đã đếm ký tự ✓
// - Chưa lọc ký tự non-alphanumeric (space, !, ...) ✗
// → Chỉ cần thêm 1 điều kiện check alphanumeric là xong
```

**Các cách check alphanumeric** (để incorporate sau):
- Dùng **regex**: `/[a-z0-9]/.test(char)`
- Dùng **ASCII code**: `char.charCodeAt(0)`
- Dùng **array** chứa toàn bộ ký tự hợp lệ (dài dòng, ít dùng)

> Nếu không nhớ cách làm phần khó → nói thẳng với interviewer: *"Tôi biết cần làm gì ở đây nhưng không chắc về cú pháp, bạn có gợi ý không?"* — điều đó vẫn tốt hơn là ngồi im.

### Bước 5 - Look Back & Refactor (Nhìn lại & Tối ưu)

Đừng dừng lại khi code "chạy được". Đây là bước quan trọng nhất để trở thành developer giỏi hơn.

**Checklist câu hỏi cần tự hỏi:**
- Code có đúng không? (Kiểm tra lại với các ví dụ đã có)
- Có cách giải khác không?
- Nhìn vào code có hiểu ngay không? (Legibility)
- Giải pháp này có áp dụng được cho bài khác không?
- Có thể cải thiện time/space complexity không?
- Code có đúng convention/style guide của team không?
- Người khác đã giải bài này như thế nào?

**Ví dụ refactor với `charCount`:**

```js
// Phiên bản gốc (hoạt động nhưng chưa tối ưu)
function charCount(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
```

```js
// Phiên bản refactored (sạch hơn, nhanh hơn)
function charCount(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1; // gộp if/else thành 1 dòng
    }
  }
  return result;
}

// Dùng charCode thay regex → nhanh hơn ~55%
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  return (code > 47 && code < 58)  ||  // 0-9
         (code > 64 && code < 91)  ||  // A-Z
         (code > 96 && code < 123);    // a-z
}
```

**Các cải tiến đã thực hiện:**
| Thay đổi | Lý do |
|---|---|
| `for...of` thay `for` | Đơn giản hơn, không cần index |
| `++result[char] \|\| 1` | Gộp if/else thành 1 dòng |
| `isAlphaNumeric()` tách riêng | Code dễ đọc, tái sử dụng được |
| charCode thay regex | Nhanh hơn ~55% (Boolean comparison đơn giản hơn regex) |

> Trong phỏng vấn: sau khi có giải pháp, hãy chủ động nói *"Tôi nghĩ phần này có thể cải thiện..."* — điều đó thể hiện tư duy của một developer tốt.

---

## Các mẫu giải thuật phổ biến

- **Frequency Counters** - Đếm tần suất
- **Two Pointers** (Multi Pointer) - Hai con trỏ
- **Divide and Conquer** - Chia để trị
- **Sliding Window** - Cửa sổ trượt
