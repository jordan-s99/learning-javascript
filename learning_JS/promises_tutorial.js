/* promises tutorial (from webdev)

Promise = commit to something, has 2 results - it's either completed (resolved) or fails (rejected)

*/

let p = new Promise((resolve, reject) => {
    // need to define what the promise is 
    let a = 1 + 1
    if (a == 2) {
        resolve("success")
    } else {
        reject("failed")
    }
})

// anything inside a .then is going to run for a resolve 
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message);
})
// .catch is for the reject

// promises replace callbacks 

// function using a callback: 

const userLeft = false
const userWatchingCatMeme = false 

function watchTutorialCallback(callback, errorCallback){
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebdevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success:' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})

// 2 callbacks, one for success, one for error - if neither true, will call the success callback 

// same function re-written using promises - code is a lot cleaner to write than callbacks 
// instead of nesting callbacks, for promises you just use .then() repeatedly 

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebdevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success:' + message)})
    .catch((error) => {
    console.log(error.name + ' ' + error.message)
})

// some of the things we can do with promises: 

const recordVideoOne = new Promise((resolve, rehject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, rehject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, rehject) => {
    resolve('Video 3 Recorded')
})

// if want to run all of these ^^ in parallel - can use Promise.all 

Promise.all([
    recordVideoOne, 
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})

// do something as soon as one of many promises is finished 

Promise.race([
    recordVideoOne, 
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})
// will only log one promise - the quickest one 