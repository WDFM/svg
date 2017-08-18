function go() {
  // cir
  var cir = document.getElementById('cir');
  var cirGo = setTimeout(function(){
    cir.style.animation = "cirgo 2s 0s forwards";
  },0);

  //rec
  var rec = document.getElementById('rec');
  var recGo = setTimeout(function(){
    rec.style.animation = "recgo 2s 0s forwards";
  },1000);

  //ell
  var ell = document.getElementById('ell');
  var ellGo = setTimeout(function(){
    ell.style.animation = "ellgo 2s 0s forwards";
  },2000);

  //pol
  var pol = document.getElementById('pol');
  var polGo = setTimeout(function(){
    pol.style.animation = "polgo 2s 0s forwards";
  },3000);
}

var h = window.height;
var body = document.getElementsByTagName('body');
body[0].style.height = h + 'px';
var wGo = document.getElementById('go');
wGO.style.height = h + 'px';
