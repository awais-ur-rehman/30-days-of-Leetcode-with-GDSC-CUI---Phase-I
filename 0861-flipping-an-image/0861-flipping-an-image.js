/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let flip = image.map(row => row.slice().reverse());
    let invert = flip.map(row => row.map(value => (value === 0 ? 1 : 0)));
    return invert;
};

let image = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipAndInvertImage(image));