let array = [1, 2, 3];

function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            break;
        }
    }
    if (digits[0] === 0) {
        let answer = new Array(digits.length + 1);
        answer[0] = 1;
        return answer;
    }
    return digits;
}

let result = plusOne(array);
console.log(result);
