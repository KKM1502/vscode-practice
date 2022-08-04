


  const start = new Date("2022-07-06:00:00:00+0900");
  // 현재 날짜
  const today = new Date();

  // 크리스마스 까지 남은 날짜 per millsecond
  const milliSecond = today - start;

  const day = Math.floor(milliSecond / 1000 / 60 / 60 / 24);

  // d-day 문자열 생성
  const dDayInfo = `${day}day`;

 document.getElementById("term").innerText = dDayInfo;
