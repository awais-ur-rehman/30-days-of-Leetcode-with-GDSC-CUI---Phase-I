/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let result = true;
    let temp = [];
    let occArr =[];
    let occ=0;
    for (let i = 0; i<arr.length; i++){
        if (temp.includes(arr[i])===true){
        }
        else{
            temp.push(arr[i]);
        }
    }
    
    for (let j = 0; j<temp.length; j++){
        occ=0;
        for (let i = 0; i<arr.length; i++){
            if (temp[j]===arr[i]){
                occ=occ+1;
                
            }
        }
        occArr.push(occ);
    }
    
    let occSet = new Set(occArr);
    setSize = occSet.size;
    arrSize = occArr.length;
    if (arrSize === setSize){
    }
    else{
        result = false;
       
    }
    return result;
};

var arr = [1,2,2,1,1,2,3];
let ans = uniqueOccurrences(arr);
console.log(ans);