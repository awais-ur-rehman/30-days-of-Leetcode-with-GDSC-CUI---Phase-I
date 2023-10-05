function diagonalSum(matrix) {
  const size = matrix.length;
  let diagonal1Sum = 0;
  let diagonal2Sum = 0;

  for (let i = 0; i < size; i++) {
    diagonal1Sum += matrix[i][i];
    diagonal2Sum += matrix[i][size - 1 - i];
  }

  if (size % 2 === 1) {
    const middle = Math.floor(size / 2);
    diagonal2Sum -= matrix[middle][middle];
  }

  return diagonal1Sum + diagonal2Sum;
}

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let total = diagonalSum(mat);
console.log(total); 
