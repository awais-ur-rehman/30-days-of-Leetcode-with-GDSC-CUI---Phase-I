/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    const sArray = s.split("");
    let start = 0;
    let end = sArray.length - 1;

    while (start < end) {
        while (start < end && vowels.indexOf(sArray[start]) === -1) {
            start++;
        }
        while (start < end && vowels.indexOf(sArray[end]) === -1) {
            end--;
        }
        [sArray[start], sArray[end]] = [sArray[end], sArray[start]];
        start++;
        end--;
    }

    return sArray.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
