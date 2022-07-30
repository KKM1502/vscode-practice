

 let answer = Math.floor(Math.random() * (100 - 1)) + 1;
 const inputnumber_v=[];
let chance=0;
const inputnumber=[];
console.log(answer)
function enter(){
    var text= document.getElementById("number").value;
if(chance<5){
    if(text>answer){
        alert('down');
        inputnumber.push(text)
        chance++;
    document.write(text)}
    else if(text<answer){
        alert('up');
        chance++;
        inputnumber.push(text)
        }
    else {
         alert('correct!');
         chance=0;
        answer=Math.floor(Math.random() * (100 - 1)) + 1;
        }
        
    }
else{alert('Wrong... you lose')}
}
// 지금까지 내가 적은 숫자 
function written(){
for(let i=0;i<inputnumber.length;i++){
   inputnumber_v.push(inputnumber[i])
}
if(inputnumber_v.length===0){alert("try 두근두근")}
else{
alert(inputnumber_v.join(","))}}