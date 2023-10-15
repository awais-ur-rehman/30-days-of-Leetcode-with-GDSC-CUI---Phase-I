/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let i = 0;

    while (i < flowerbed.length) {
        if (flowerbed[i] === 0) {
            const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
            const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1; 
                count++;
            }
        }
        i++;
    }

    return count >= n;
};

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1));  

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2));
