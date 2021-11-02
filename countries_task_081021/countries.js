import fetch from "node-fetch";

let countries = [];

fetch("https://restcountries.com/v3.1/all")
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        countries = data
    })
   .then(function(){
       const worldCurrencies = countries.map(function(country){
           return country.currencies;
       });
       console.log(worldCurrencies);
    })

// so far this solution produces all countries' currencies, even if duplicates 
    