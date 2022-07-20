function solution(n, lost, reserve) {
    var answer =0;
    const count = new Array(n).fill(1);console.log(count)
    //lost는 가진 개수 하나씩 제거
    for(let i=0 ; i<lost.length; i++){
    count[lost[i]-1]--;
    }console.log(count)
    // reserve는 가진 개수 하나씩 추가 
    for(let i=0 ; i<reserve.length; i++){
    count[reserve[i]-1]++;
    }console.log(count)
    //양 옆이 2개면 하나를 나눠줌 
     for(let i=0 ; i<n; i++){
        if(count[i]===0){
            if(count[i-1]===2)
            {count[i-1]--;
            count[i]++;}
            else if(count[i+1]===2)
            {count[i]++;
            count[i+1]--;}
        }
    }
    console.log(count)
    for(let i=0 ; i<n; i++){
        if(count[i]>0){
            answer++;
        }
    }
    
    return answer
}
    