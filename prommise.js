'use strict'
//when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject)=>{
//doing some heavy work(network, read files) 바로 실행시킴 (비동기)
console.log("doing something....");
setTimeout(()=>{
    //resolve('ellie');
    reject(new Error("no network"));
},2000)
}); 
//2.Cousumers: then, catch, finally
promise
.then((value)=>{
    console.log(value);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
console.log(finailly);
});

//3. promise chaining
const fetchNumber = new Promise((resolove, reject)=>{
    setTimeout(()=>resolve(1),1000);
})

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve,recjet)=>{
    setTimeout(()=>resolve(num-1),1000);
});
})
.then(num=>console.log(num));

//4. Error Handling
const getHen =()=>
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`hen`),1000)
});
const getEgg =()=>
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${hen}=>egg`),1000)
});
const cook =()=>
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${egg}=>fried`),1000)
});
getHen()
.then(getEgg)
.then(cook)
.then(console.log);