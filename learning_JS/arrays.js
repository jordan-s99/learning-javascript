/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. 
 * Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */
stations.push("London Kings Cross");

console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
stations.shift()

console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = stations.length;

console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations[2];

console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */
stations[1] = "Berwick-upon-Tweed" 
// correct but could declare a variable to store it in, if need to find index of N Berwick:
// indexOfBerwick = stations.indexOf("North Berwick")
// stations[indexOfBerwick] = "Berwick-upon-Tweed"
// or could have done it in one line: 
// stations[stations.indexOf("North Berwick")] = "Berwick-upon-Tweed"

console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it. // leeds is 4 //
 */
stations.splice(4,1);
//the 1 is because you only want to remove 1 item from the array 
//could also use a filter: stations = stations.filter(stations -> station !== "leeds");
// ^ is useful if looking for multiple items with same value / you don't know index no. of Leeds 
// is called an innumeration method 
// using an arrow function 

console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York. //between 2 and 3// 
 */
stations.splice(3, 0, "Darlington");

console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */

stoppingAtDurham = null;
// answer: [i didn't figure this out]
// stoppingAtDurham = stations.includes("Durham")
// will return: a boolean i.e. false, as durham is not in the list 

// console.log(stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

if(stations.indexOf("Durham") !== -1) {
    console.log("Yay Durham!")
} else {
    console.log("Aw...")
}

/* i got this solution from the internet 
Class solution: 
 if (stations.includes("Durham")) {
     console.log("Yay Durham!");
 } else { 
     console.log("Aw...")
}
 or could have just used the stoppingAtDurham variable 
 if (stoppingAtDurham) {
     console.log("Yay Durham!");
 } else { 
     console.log("Aw...")
}
*/

/* Turnary operation: 
 if stoppingAtDurham ? console.log("Yay Durham!") : console.log("Aww...");
*/