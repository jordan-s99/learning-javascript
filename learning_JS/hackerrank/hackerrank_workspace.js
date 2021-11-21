// MINI MAX SUM 

// function miniMaxSum(arr) {
//     // sort them in ascending order 
//     // for max, add everything but index 0 
//     // for min, add everything but index arr.length - 1
//     arr.sort(function(a, b){return a - b});
//     let max = 0; // must be 'let' as will change the value (i.e. not const)
//     let min = 0;
//     for (let index = 1; index < arr.length; index++){ // musn't forget 'let' keyword on this line! 
//        max += arr[index];
//     }
//     for (let index = 0; index < arr.length - 1; index++){  
//         min += arr[index];
//      }
//  console.log(min, max);
// }
//  arr = [1, 2, 3, 4, 5];
// miniMaxSum(arr);

// TIME CONVERSION 

//let s = "h:ello:wor:ld"
//let j = s.slice(0, 6) // 6 is not inclusive 
//let j = s.replace(/:/g, '') // global removal of something from a string: /something/g 
//console.log(j);
let s = '02:01:00PM';
// let j = s.slice(0, 8);
// j = j.replace(/:/g, '');
// console.log(j);

function timeConversion(s) {
    // take string cut off last bit 
    // let j = s.slice(0, 8);
    // j = j.replace(/:/g, ''); - better to use split! 

    const arr = s.slice(0,8).split(':');
    // done using ternary operators 
    arr[0] = (s.indexOf('PM') > -1) ?
             (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
             (arr[0] == 12 ? '00' : arr[0]);
    return arr.join(':');
   
}
//console.log(timeConversion(s));
// given a 12hour format, convert it to 24hr time 
// takes and returns a string 

//  FIND THE MEDIAN 

function findMedian(arr){
    arr.sort(function(a, b){
        return a - b});
    let j = Math.floor(arr.length / 2); // math.floor rounds to integer 
    if (arr.length % 2 ){ // if there is no remainder of halving the length  then return item at index j 
        return arr[j];
    } else { // otherwise, do: 
        // (element at index before j + element at half of index j)
        return (arr[j - 1] + arr[j / 2]);
    }
}
let b = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(findMedian(b))
// this produces 5: 3  + (4 / 2) 