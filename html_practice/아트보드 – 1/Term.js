


  const start = new Date("2022-07-18:00:00:00+0900");
  
  // 현재 날짜
  const today = new Date();
  

  // 크리스마스 까지 남은 날짜 per millsecond
  const Term = today - start;


  const day = Math.floor(Term / 1000 / 60 / 60 / 24);
  

  // d-day 문자열 생성
  const dDayInfo = `${day}days`;
  

 document.getElementById("term").innerText = dDayInfo;



