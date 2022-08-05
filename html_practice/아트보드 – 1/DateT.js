

  const startT_1 = new Date("2022-09-05:00:00:00+0900");
  
  // 현재 날짜
  const todayT_1 = new Date();
  

  // 크리스마스 까지 남은 날짜 per millsecond
  const TermT_1 = startT_1- todayT_1;


  const dayT_1 = Math.floor(TermT_1 / 1000 / 60 / 60 / 24);
  

  // d-day 문자열 생성
  const dDayInfoT_1 = `${dayT_1}days`;
  

 document.getElementById("current_date_T").innerText = dDayInfoT_1;



