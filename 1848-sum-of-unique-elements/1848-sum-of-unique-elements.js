var sumOfUnique = function(nums) {
    const numCount = new Map();
    let answer = 0;

    for (let num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    for (let [num, count] of numCount.entries()) {
        if (count === 1) {
            answer += num;
        }
    }

    return answer;
};

let nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums));