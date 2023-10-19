/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(num1, num2) {
    const set1 = new Set(num1);
    const set2 = new Set(num2);
    const answer1 = [];
    const answer2 = [];

    for (const num of set1) {
        if (!set2.has(num)) {
            answer1.push(num);
        }
    }

    for (const num of set2) {
        if (!set1.has(num)) {
            answer2.push(num);
        }
    }

    return [answer1, answer2];
};

var nums1 = [1, 2, 3];
var nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));

var nums3 = [1, 2, 3, 3];
var nums4 = [1, 1, 2, 2];
console.log(findDifference(nums3, nums4));
