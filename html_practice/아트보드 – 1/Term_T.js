


  const startT = new Date("2022-10-16:00:00:00+0900");
  
  // 현재 날짜
  const todayT = new Date();
  

  // 크리스마스 까지 남은 날짜 per millsecond
  const TermT = startT- todayT;


  const dayT = Math.floor(TermT / 1000 / 60 / 60 / 24);
  

  // d-day 문자열 생성
  const dDayInfoT = `${dayT}days`;
  

 document.getElementById("term_T").innerText = dDayInfoT;



