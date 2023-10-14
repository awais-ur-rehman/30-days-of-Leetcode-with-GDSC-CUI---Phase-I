/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const lengthGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lengthGCD);
};

console.log(gcdOfStrings("ABCABC", "ABC")); 
console.log(gcdOfStrings("ABABAB", "ABAB")); 
console.log(gcdOfStrings("LEET", "CODE")); 
