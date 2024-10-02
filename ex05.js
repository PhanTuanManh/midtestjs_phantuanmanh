
const categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
]

/**
Output:
  <select>
    <option value="1">Chuyên mục 1</option>
    <option value="2">Chuyên mục 2</option>
    <option value="4">-- Chuyên mục 2.1</option>
    <option value="5">-- Chuyên mục 2.2</option>
    <option value="10">---- Chuyên mục 2.2.1</option>
    <option value="11">---- Chuyên mục 2.2.2</option>
    <option value="12">---- Chuyên mục 2.2.3</option>
    <option value="6">-- Chuyên mục 2.3</option>
    <option value="3">Chuyên mục 3</option>
    <option value="7">-- Chuyên mục 3.1</option>
    <option value="8">-- Chuyên mục 3.2</option>
    <option value="9">-- Chuyên mục 3.3</option>
  </select>
*/

function convertArrayToOptions(arr) {
    let newArr = arr.map((item) => {
        if (item.children) {
            return `<option value="${item.id}">${item.name}</option>` + convertArrayToOptions(item.children)
        } else {
            return `<option value="${item.id}">${item.name}</option>`
        }
    })

    return newArr
}

let result = convertArrayToOptions(categories);

document.write(`<select>${result}</select>`);

/**
Thiếu hoặc không đúng các thuộc tính value của thẻ option sẽ bị trừ (0.5đ).
Thiếu hoặc không đúng các dấu "--" để phân biệt cấp độ sẽ bị trừ (0.5đ).
Sắp xếp không đúng thứ tự các chuyên mục sẽ bị trừ (0.5đ).
Khi số lượng cấp độ chuyên mục con tăng hoặc giảm thì vẫn hiển thị đúng thứ tự (0.5đ).
 */

