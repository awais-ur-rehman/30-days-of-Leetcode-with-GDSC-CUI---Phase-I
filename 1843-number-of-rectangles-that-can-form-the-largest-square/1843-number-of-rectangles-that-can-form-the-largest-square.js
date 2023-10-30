/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let maxLen = 0;
    let count = 0;
    
    for (let i = 0; i < rectangles.length; i++) {
        const minSide = Math.min(rectangles[i][0], rectangles[i][1]);
        
        if (minSide > maxLen) {
            maxLen = minSide;
            count = 1;
        } else if (minSide === maxLen) {
            count++;
        }
    }
    
    return count;
};
