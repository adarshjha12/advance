let firstPromice = new Promise((resolve, reject) => {
   setTimeout(function(){

    console.log('resolved successfully');
    resolve()
   }, 1000)
})

firstPromice.then(() =>{

    console.log('thank you');
})