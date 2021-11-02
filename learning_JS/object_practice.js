// const numberTest = function(a, b){
//     if (a === 100 || b === 100){
//         console.log("a or b = 100!");
//     } else if  (a + b === 100) {
//        console.log("a + b = 100!");
//     } else {
//         console.log("pick different numbers!");
//     }
// }
// shortened version: 
// const numberTest = (a,b) => a === 100 || b === 100 || (a + b) === 100;

// console.log(numberTest(100,50));

// q2 
// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
// lastIndexOf gives you whatever comes after the specified character(here it's the .)
// console.log(getFileExtension('index.html'))

// const replaceCharacter = (str) => 
//     str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
// console.log(replaceCharacter('jordan'));

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}
console.log(formatDate());