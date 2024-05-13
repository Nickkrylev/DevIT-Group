function multiplyOddsByMin(matrix) {
    let min = Infinity;
    for (let row of matrix) {
      for (let value of row) {
        if (value < min) {
          min = value;
        }
      }
    }
  
   
    let transformedMatrix = matrix.map(row => 
      row.map(value => 
        value % 2 !== 0 ? value * min : value
      )
    );
  
    return transformedMatrix;
  }
  

  let matrix = [
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
  ];
  

  console.log(multiplyOddsByMin(matrix));
  