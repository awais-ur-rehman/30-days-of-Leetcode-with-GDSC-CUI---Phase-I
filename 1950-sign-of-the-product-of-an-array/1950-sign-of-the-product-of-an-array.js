/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [-1,-2,-3,-4,3,2,1]
var arraySign = function(nums) {
    let result = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        result = result * nums[i];
    }
    if(result > 0){
        return 1
    }
    else if(result < 0){
        return -1
    }
    else{
        return 0
    }
};

console.log(arraySign(nums));