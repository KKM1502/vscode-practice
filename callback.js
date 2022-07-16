'use strict'

function printIm(print){
    print();
}


function printDe(print,timeout){
    setTimeout(print, timeout);

}

console.log('1');
//동기
setTimeout(()=>console.log('2'),1000);
//비동기
printIm(()=>console.log('hi'));
printDe(()=>console.log('call back'),2000);
