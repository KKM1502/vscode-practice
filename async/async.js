//async  &  await
//clear style of using promise 

//async  = promies!@@@!
async function fetchUsesr(){
    //do network request in 10 secs..
       return 'gyeong112';
}

const user= fetchUsesr();
user.then(console.log)
console.log(user);

//2. await

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await  delay(3000);
    return `apple`;
}
async function getbanana(){
    await  delay(3000);
    return `banana`;
}

//promise api

function pickAllFruits(){
    return Promise.all([getApple(),getbanana()]).then(fruits=>fruits.join(' '));

}

pickAllFruits().then(console.log);
function pickOnlyOne(){
    return Promise.race([getApple(),getbanana()]);
};
pickOnlyOne().then(console.log);