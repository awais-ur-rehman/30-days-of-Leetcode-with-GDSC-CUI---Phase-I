/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;
    
    while (low <= high) {
        const partitionX = (low + high) >> 1;
        const partitionY = ((x + y + 1) >> 1) - partitionX;
        
        const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        
        const minX = (partitionX === x) ? Infinity : nums1[partitionX];
        const minY = (partitionY === y) ? Infinity : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) { 
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted.");
};

let nums1 = [1, 3, 4];
let nums2 = [2];
let result = findMedianSortedArrays(nums1, nums2);
console.log(result);