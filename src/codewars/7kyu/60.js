const stantonMeasure = arr => {

  const findOne = arr.filter(x => x === 1).length
  return arr.filter(x => x === findOne).length

}
/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/