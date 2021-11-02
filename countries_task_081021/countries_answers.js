// original to log all data [not going to touch the first two of the .then]
// fetch("https://restcountries.com/v3.1/all")
//     .then(function(result){
//         return result.json()
//     })
//     .then(function(data){
//         countries = data
//     })
//     .then(function(){
//         console.log(countries);
//     })

//Q1 

// .then(function(){
//     const officialNames = countries.map(function(country){
//         return country.name.official
//     })
//     console.log(officialNames);
// })

//Q2

// .then(function(){
//     const ifLandlocked = countries.filter(function(country){
//         return country.landlocked
//     })
//     console.log(ifLandlocked);
// })
// below produced the same result: 
// .then(function(){
//     const ifLandlocked = countries.filter(function(country){
//          return country.landlocked === true;
//      })
//      console.log(ifLandlocked);
//  })

//Q3 - incomplete, UN members are listed but needed to put either yes or no 
// .then(function(){
//     const ifAllUnMembers = countries.filter(function(country){
//           return country.unMember
// })
// console.log(ifAllUnMembers)
// })

// length is 193 - a roundabout way of saying no 
// .then(function(){
//     const ifAllUnMembers = countries.filter(country => country.unMember === true);
//      console.log(ifAllUnMembers.length)
// })

//answer that produces false 
// .then(function(){
//     let ifAllUnMembers = countries.every(country => country.unMember === true);
//      console.log("Every country is a UN member is:", ifAllUnMembers)
// })

//Q4 - so far, my solution produces the number 0
// .then(function(){
//     const useEuroCurrency = countries.filter(country => country.currencies === "EUR");
//      console.log(useEuroCurrency.length)
// })



//Q5
// solution logs false: 
// .then(function(){
//     let allCountriesIndependent = countries.every(country => country.independent === true);
//      console.log("Every country is independent:", allCountriesIndependent)
// })

//Q6

// .then(function(){
//     let totalPopulation = countries.reduce(function(runningTotal, country){
//          return runningTotal + country.population;
//     }, 0);
//     console.log(totalPopulation)
// })
// answer = 7,753,440,920

//Q7
// .then(function(){
// const countryFlags = countries.map(function(country){
//     return country.flag;
// })
// console.log(countryFlags)
// })
 // q7 other solution 
//  .then(function(){
//     let flagString = "";
//     countries.forEach((country) => flagString = flagString + country.flag);
//     console.log(flagString)
// })

//Q8  germany and how many countries it borders 
// .then(function(){
//     const germanyBorderCountriesNumber = countries.filter(function(country){
//         return country.name.common === "Germany";
//     })[0].borders.length
//     console.log(germanyBorderCountriesNumber)
// })

//Q9 find how many countries germany borders, without looking for germany "DEU"
/*
 .then(function(){
        const germanyBorderCountriesNumber = countries.filter((country) => country.borders);
        console.log(germanyBorderCountriesNumber.filter((country) => Object.values(country.borders)
            .indexOf("DEU") >-1).length)
        })

*/

//Q10 Build an array of all the different currencies used in the world
/*
so far this solution produces all countries' currencies, even if duplicates 
.then(function(){
       const worldCurrencies = countries.map(function(country){
           return country.currencies;
       });
       console.log(worldCurrencies);
    })
*/