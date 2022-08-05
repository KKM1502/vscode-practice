
const dDayT = document.getElementById("term_second_T");
function getTime(){
  const startT = new Date("2022-11-11:00:00:00+0900");
  // 현재 날짜
  const todayT = new Date();

  // 크리스마스 까지 남은 날짜 per millsecond
  const milliSecondT = startT-todayT;
  const secondT = Math.floor((milliSecondT / 1000) % 60);
  const minuteT = Math.floor((milliSecondT / 1000 / 60) % 60);
  const hourT = Math.floor(milliSecondT / 1000 / 60 / 60) % 24;
  const dayT = Math.floor(milliSecondT / 1000 / 60 / 60 / 24);

  // d-day 문자열 생성
  const dDayInfoT = `${dayT}d ${hourT}h ${minuteT}m ${secondT}s`;

dDayT.innerText = dDayInfoT;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
 init()