/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target1 = 9;
let target2 = 2;

console.log(`Target 1: ${target1} at index ${search(nums, target1)}`);
console.log(`Target 2: ${target2} at index ${search(nums, target2)}`);
