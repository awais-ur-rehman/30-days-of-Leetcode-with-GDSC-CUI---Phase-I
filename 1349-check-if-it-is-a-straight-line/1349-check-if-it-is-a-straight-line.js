var checkStraightLine = function(coordinates) {
    if (coordinates.length < 2) {
        return true;
    }

    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    if (x2 - x1 === 0) {
        for (let i = 2; i < coordinates.length; i++) {
            const [x, _] = coordinates[i];
            if (x !== x1) {
                return false;
            }
        }
    } else {
        const initialSlope = (y2 - y1) / (x2 - x1);
        for (let i = 2; i < coordinates.length; i++) {
            const [x, y] = coordinates[i];
            const slope = (y - y1) / (x - x1);
            if (slope !== initialSlope) {
                return false;
            }
        }
    }

    return true;
};

const coordinates = [[0,0],[0,1],[0,-1]];
const result = checkStraightLine(coordinates);
console.log(result);
