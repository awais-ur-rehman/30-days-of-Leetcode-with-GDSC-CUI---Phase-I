/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let answer = 0;
    let temp = [];
    for (let i = 0; i < nums.length; i++){
        let count = 0;
        for (let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++;
            }
        }
        if(count === 1){
            temp.push(nums[i]);
        }
    
    }
    for (let k = 0; k < temp.length ; k++){
        answer = answer + temp[k];
    }
    return answer;
};

let nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums));