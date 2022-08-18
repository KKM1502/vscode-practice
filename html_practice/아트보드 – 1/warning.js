

function Warning(){
    const contents=document.getElementById("p1_contents").value;
    if(contents.indexOf("하기 싫다")>-1){
        alert("금지어 발견");
    }
    else{
        alert("등록완료")
    }
   }