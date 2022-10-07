//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F



function abbrevName(name){
 
  let firstLetter = name.charAt(0)
  let indexOfSpace 
   
   for (let i = 0; i < name.length; i++) {
     //if current letter is space 
     if (name[i] === ' ') {
     //then update variable index of space to hold the location of the space in the name
       indexOfSpace = i
     }
 
   }
   //console.log(indexOfSpace)
   let indexOfSecondLetter = indexOfSpace + 1
   let lastLetter = name.charAt(indexOfSecondLetter)
   let solution = firstLetter + '.' + lastLetter
   let upperCaseSolution = solution.toUpperCase()
   console.log(solution)
   return upperCaseSolution
   
 }