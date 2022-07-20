let a =[1,2,56,7,5,43,6];
a=a.sort(function(x,y){

    if(x>y)
    return -1
});
console.log(a);
//내림 차순 
b=a.sort(function(x,y){

    if(x<y)
    return -1
});
console.log(b);
//오름차순