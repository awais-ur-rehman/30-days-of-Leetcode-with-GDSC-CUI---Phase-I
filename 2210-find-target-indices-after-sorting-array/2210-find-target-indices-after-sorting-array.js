/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            answer.push(i);
        }
    }
    return answer;
};

let nums = [1, 2, 5, 2, 3];
let target = 2;
let answer = targetIndices(nums, target);
console.log(answer);

