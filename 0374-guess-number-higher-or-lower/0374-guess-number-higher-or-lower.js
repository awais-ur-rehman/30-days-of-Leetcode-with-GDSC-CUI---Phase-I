/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const result = guess(mid);
        
        if (result === 0) {
            return mid; // Found the correct number
        } else if (result === -1) {
            right = mid - 1; // Adjust the right boundary
        } else {
            left = mid + 1; // Adjust the left boundary
        }
    }
    
    return -1; // Return -1 if no number is found (should not happen as per the problem constraints)
};
