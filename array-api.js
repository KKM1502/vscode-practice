// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const answer = fruits.join(",");
  console.log(answer);
  console.log('-------');
}

// Q2. make an array out of a string
{
  const fruits = 'abcdefg';
  const result2 = fruits.split(",");
  console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result3  = array.reverse();
  console.log(result3);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result4 = array.slice(2,5);
  console.log(result4);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  function isme(element){
    if(element.score===90)
    return element.name;
  }
  const result5= students.find(isme);
  console.log(result5); 
}

{
  const result5_2=students.find((student)=>student.score===90);
  console.log(result5_2.name);
}

// Q6. make an array of enrolled students
{
  function enrollStudent(element){
    if(element.enrolled===true){
      return element.name;
    }
  }
  const result6 = students.filter(enrollStudent);
  console.log(result6);
}

{
  const result6_2 = students.filter((element)=>element.enrolled);
  console.log(result6_2);
  const ABC=[];
    for (let i =0; i<result6_2.length;i++){
      ABC[i]=result6_2[i].name;
      }   
  console.log(ABC);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{ const BCD=students.filter((element)=>element.score);
  const result7=[];
  for(let i=0;i<BCD.length;i++){
    result7[i]=BCD[i].score;
  }
  console.log(result7);
  //or
  const result7_2=students.map((student)=>student.score);
  console.log(result7_2);
}

// Q8. check if there is a student with the score lower than 50
{
  const result8=students.some((element)=>element.score<50);
  console.log(result8);
}

// Q9. compute students' average score
{
  const sumofstudent=students.map((student)=>student.score);
  console.log(sumofstudent);
  for(let i=0;i<sumofstudent.length;i++){
    var result9=0;
    result9=(result9 + sumofstudent[i]); 
    console.log(result9); 
  }

//or
const result9_2=students.reduce((prev,curr)=>{
return prev+curr.score;
},0);
console.log(result9_2/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((element)=>element.score);
  const result_1= result.join(",");
  console.log(result_1);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((element)=>element.score);
  const bonus=result.sort((a, b) => a - b);
  const result_1= bonus.join(",");
  console.log(result_1);

}
