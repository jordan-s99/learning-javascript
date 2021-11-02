// sort number into descending order 
function descendingOrder(n){
   let digits = (""+n).split("");
   for (var i = 0; i < digits.length; i++) { 
       digits[i] = +digits[i]; 
    };
    let highestToLowest = digits.sort((a, b) => b-a);
    return highestToLowest;
  }
 

  console.log(descendingOrder(0));
