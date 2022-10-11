//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.






function findAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++){
   sum += array[i] 
  }
  if (array.length > 0) {
    let quotient = sum / array.length
    return quotient;
  } else {
    return 0
  }

}