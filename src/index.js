
// You should implement your task here.

module.exports = function towelSort(matrix) {
    // let arr = matrix.toString('').split().join()
  if(matrix){
    for(let i = 0; i< matrix.length; i++){
        if(matrix.length === 0) {
            return matrix
        } else if(i % 2 !== 0){
          matrix[i].reverse();
      }
    }
  } else return []
  let res = [].concat(...matrix);
  return res;
}
