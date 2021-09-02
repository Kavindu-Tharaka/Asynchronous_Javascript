const prom = new Promise(function (resolve, reject){
    setTimeout(() => {
        //do async work

        // resolve(1);                     //if success
        reject(new Error('Msg'))        //if failed
    }, 2000);
});


prom
    .then(res => console.log(res))
    .catch(err => console.log(err.message));
    