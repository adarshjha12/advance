// let firstPromice = new Promise((resolve, reject) => {
//    setTimeout(function(){

//     console.log('resolved successfully');
//     resolve()
//    }, 1000)
// })

// firstPromice.then(() =>{

//     console.log('thank you');
// })



// let secondPromice = new Promise((resolve, reject) => {
//     setTimeout(() =>{

//         console.log('hiiiiiii');
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log('helllooooooo');
// })




// let thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{

//         resolve({username: "adarsh", password: 12627733838})
//     }, 1000)
// })

// thirdPromise.then((user) => {

//     console.log(user);
// })



let fourthPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let error = true
        if (!error) {
            resolve({title: 'IPL', team: 'CSK'})
        } else{
            reject('ERROR: 404 not found')
        }
    }, 1000)
})

fourthPromise.then((data) => {

    console.log(data);
    return data.title
})
.then((dTitles) => {
    console.log(dTitles);
})
.catch((error) => {
    console.error(error);
})