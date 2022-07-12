const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
for (let i=0;i<fruits.legth;i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
fruits.forEach(function(fruits, index){
    console.log(fruits,index);

});
fruits.forEach((fruit)=>console.log(fruits));
fruits.push('strawberry','peach');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.splice(0,2,'melon','watermelon');
//splice >> delete from index 0 to index 1 and add melon, watermelon 
console.log(fruits);

const fruits1 = ['lemon','greenapple'];
const NewFruits = fruits.concat(fruits1);
console.log(NewFruits);

console.log(NewFruits.indexOf('lemon'));
//indexof는 가장 처음나온 lemon을 출력 마지막 lemon출력은 lastindexof
console.log(NewFruits.includes('lemon'));
