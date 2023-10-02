let array = [1, 2, 3, 4, 5, 6, 7]

let sum = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = array[i] + result;
    }
    return result
}

console.log(sum(array))
