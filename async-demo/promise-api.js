//Mocking the JS promises

Promise.resolve(1).then(res=>{
    console.log(res);
});
Promise.reject(new Error('Test')).catch(err=>console.log(err));

//Parallel promise consumption - Kick off multiple aSync operations
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
        console.log('Executed promise 1');
    }, 2000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Executed promise 2');
        reject(new Error(2));
    }, 1000);
});


//Pass in an array - Do something with the array that is returned
Promise.all([p1, p2]).then(res=>console.log(res[0])).catch(err=>console.log(err));

Promise.race
