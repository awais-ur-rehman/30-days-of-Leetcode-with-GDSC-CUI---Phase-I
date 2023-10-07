/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  if (low % 2 === 0) {
    low++;
  }
  
  if (high % 2 === 0) {
    high--;
  }
  
  return Math.floor((high - low) / 2) + 1;
};


const low = 3;
const high = 7;
const result = countOdds(low, high);
console.log(`Number of odd numbers between ${low} and ${high}: ${result}`);