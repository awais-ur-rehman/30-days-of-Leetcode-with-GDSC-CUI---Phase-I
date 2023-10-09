/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    
    for (let num = left; num <= right; num++) {
        if (isSelfDividing(num)) {
            result.push(num);
        }
    }
    
    return result;
};

function isSelfDividing(num) {
    const numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
    }
    
    return true;
}

const left = 1;
const right = 22;
const result = selfDividingNumbers(left, right);
console.log(result);
