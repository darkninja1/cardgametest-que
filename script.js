var min  = 0;
var sec = 0;
var start1 = false;
var timer1;
var count1 = 5;
function start() {
  if (!start1) {
    playsound('click2.mp3');
    timer1 = setInterval(quetimer,1000);
    start1 = true;
    document.getElementById('fight2').style.background = "rgba(255,255,0,0.2)";
    document.getElementById('fight').innerHTML = "IN QUEUE";
    document.getElementById('fight2').innerHTML = "0:00";
  }
  else {
    playsound('click5.mp3');
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
  loadfakeplayer();
}
function playsound(sound) {
   var lol = document.createElement("AUDIO");
   lol.style.display = "none";
  lol.setAttribute("src",sound);
  document.body.appendChild(lol);
    lol.load();
  lol.play();
  lol.onended = function() {
    lol.remove();
  }
}
function loadfakeplayer() {
  if (sec == 10) {
    clearInterval(timer1);
    playsound('matchfound.mp3');
    countdown();
  }
}
function deal() {
  document.getElementById('cardholder').innerHTML += `<card>asdf</card><card>asdf</card>`;
}
function countdown() {
  if (count1 < 5) {
    playsound('click3.mp3');
  }
  document.getElementById('countdown').style.display = 'block';
  var box = document.getElementById("countd");
  document.getElementById('countdown').removeChild(box);
  document.getElementById('countdown').appendChild(box);
  document.getElementById('countd').innerHTML = count1;
  document.getElementById('countd').style.animation = "countd 1s 1"; 
setTimeout( function() {document.getElementById('countdown').style.display = "none";count1-=1;if (count1 >= 0) {countdown();}else{document.getElementById('gamemenu').style.display = 'none';document.getElementById('game').style.display = 'block';deal();}},1000);
}