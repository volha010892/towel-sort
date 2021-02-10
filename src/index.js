
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix||matrix.length===0){
    return [];
  }
else{
    let result=[];
 for(let i=0; i<matrix.length; i++){
    if(i%2!==0){
     matrix[i].reverse();
    }
    result.push(matrix[i])
  }
  return result.flat(Infinity);
}
}
