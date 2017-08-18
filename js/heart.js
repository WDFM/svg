var h = window.screen.height;
var body = document.getElementsByTagName('body');
body[0].style.height = h + 'px';
var wgo = document.getElementById('go');
wgo.style.height = h + 'px';

function go() {
  document.getElementById('go').style.display = "none";
  document.getElementById('show').style.display = "block";
  setTimeout(function() {
    document.getElementById('i1').style.animation = "iGo 5s ease-out forwards";
    document.getElementById('i2').style.animation = "iGo 5s ease-out forwards";
    document.getElementById('i3').style.animation = "iGo 5s ease-out forwards";
    body[0].style.animation = "bodyGo 5s forwards";
  },1000);

  setTimeout(function(){
    document.getElementById('heart').style.animation = "myHeart 5s ease-out forwards";
  },4000);

  setTimeout(function(){
    document.getElementById('u1').style.animation = "uGo 5s ease-out forwards";
    document.getElementById('u2').style.animation = "uGo 5s ease-out forwards";
    document.getElementById('u3').style.animation = "uGo   5s ease-out forwards";
  },6000);
}
