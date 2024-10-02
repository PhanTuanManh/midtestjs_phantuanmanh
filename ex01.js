/**
Hàm taxiFare(km) nhận vào số km và trả về số tiền phải trả dựa trên các quy tắc sau:

Trả về "invalid" nếu km không phải là số hợp lệ hoặc nhỏ hơn 0. (0.25đ)
1 km đầu tiên: 5000đ. (0.25đ)
Từ km thứ 2 đến km thứ 30: 4000đ/km. (0.25đ)
Từ km thứ 31 trở đi: 3000đ/km. (0.25đ)
*/

function taxiFare(km) {
    if (km <= 0 || isNaN(km) || typeof km !== 'number') {
        return "invalid";
    } else if (km <= 1) {
        return 5000;
    } else if (km <= 30) {
        return 5000 + (km - 1) * 4000;
    } else {
        return 5000 + 28 * 4000 + (km - 30) * 3000;
    }
}

console.log(taxiFare(1));
