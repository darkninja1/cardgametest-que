var min  = 0;
var sec = 0;
var start1 = false;
var timer1;
function start() {
  if (!start1) {
    timer1 = setInterval(quetimer,1000);
    start1 = true;
    document.getElementById('fight2').style.background = "rgba(255,255,0,0.2)";
    document.getElementById('fight').innerHTML = "IN QUEUE";
    document.getElementById('fight2').innerHTML = "0:00";
  }
  else {
    sec = 0;
    min = 0;
    clearInterval(timer1);
    document.getElementById('fight').innerHTML = "START";
    document.getElementById('fight2').innerHTML = "PLAY";
    document.getElementById('fight2').style.background = "rgba(255,255,255,0.6)";
    start1 = false;
  }
}
function quetimer() {
  sec += 1;
  if (sec == 60) {
    min += 1;
    sec = 0;
  }
  if (sec < 10) {
  document.getElementById('fight2').innerHTML = min+":0"+sec;
   
  }
  else {
    document.getElementById('fight2').innerHTML = min+":"+sec;
  }
}