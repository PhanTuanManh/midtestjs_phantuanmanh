/**
Trả về "Invalid" nếu n không phải là số hợp lệ. Trả về "Không chia hết" cho tất cả các trường hợp khác. (0.5đ)
Trả về "Chia hết cho 3" nếu n chia hết cho 3. Trả về "Chia hết cho 5" nếu n chia hết cho 5. (0.5đ)
Trả về "Chia hết cho cả 3 số 3, 5 và 15" nếu n chia hết cho cả 3 số 3, 5 và 15. (0.5đ)

type of number !== 'number' || isNaN(number)
 */

function checkNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return "invalid";
    }
    else if (number % 15 === 0) {
        return "Chia het cho 3, 5, 15";
    } else if (number % 3 === 0) {
        return "Chia het cho 3";
    } else if (number % 5 === 0) {
        return "Chia het cho 5";
    } else {
        return "Khong chia het cho 3, 5, 15";
    }
}


console.log(checkNumber(15));
console.log(checkNumber(5));
console.log(checkNumber(3));
console.log(checkNumber(1));