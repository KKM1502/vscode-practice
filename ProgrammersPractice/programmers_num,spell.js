// 숫자는 그대로 영문자의 숫자 스펠링은 숫자로  

function solution(s) {
    s=s.replace(/zero/g,0)
    .replace(/one/g,1)
    .replace(/two/g,2)
    .replace(/three/g,3)
    .replace(/four/g,4)
    .replace(/five/g,5)
    .replace(/six/g,6)
    .replace(/seven/g,7)
    .replace(/eight/g,8)
    .replace(/nine/g,9)
return Number(s);
}




function solution_1(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
        console.log(arr)
        console.log(answer)
    }


    return Number(answer);
}
const s="one1zero0three3"
const s_1="zero9eight0seven6"
console.log(solution(s));
console.log(solution_1(s));