var np = 0;
var nx = 1;
var ny = 1;
var fs = 80;
var s = "";
var col = 0;
var yes = false;
const sad = ["", "What the heck", "Please reconsider", "Please say yes", "You're hurting my feelings", "Please say yes :("];
function n() {
  np++;
  if (np < 6) {
    document.getElementById("y").style.width = (40 * np).toString() + "px";
    document.getElementById("y").style.height = (25 * np).toString() + "px";
    document.getElementById("y").style.fontSize = (100 * np).toString() + "%";
    s = document.getElementById("n");
    s.innerHTML = sad[np];
  } else if (np < 15) {
    s = document.getElementById("n");
    s.innerHTML = "No";
    document.getElementById("n").style.position = "absolute";
    document.getElementById("n").style.left = "50px";
    document.getElementById("n").style.top = "50px";
    document.getElementById("n").addEventListener("mouseover", f);
  } else {
    document.getElementById("n").style.width = fs.toString() + "px";
    document.getElementById("n").style.height = (fs*(5/8)).toString() + "px";
    document.getElementById("n").style.fontSize = (fs).toString() + "%";
    fs -= 5;
  }
}
setInterval(dvd, 100);
function f() {
  if (np < 20) {
    document.getElementById("n").style.left = Math.floor(Math.random() * 400).toString() + "px";
    document.getElementById("n").style.top = Math.floor(Math.random() * 300).toString() + "px";
    np++;
  } else {
    return 0;
  }
}
function dvd() {
  if (np < 30 && np > 19) {
    document.getElementById("n").style.position = "absolute";
    var rect = document.getElementById("n").getBoundingClientRect();
    document.getElementById("n").addEventListener("mouseover", nc);
  } else {
    return 0;
  }
  document.getElementById("n").style.left = (rect.left + (nx*10)).toString() + "px";
  document.getElementById("n").style.top = (rect.top + (ny*10)).toString() + "px";
  if (rect.right < 50) {
    nx = 1;
  }
  if (rect.right > 600) {
    nx = -1;
  }
  if (rect.top < 20) {
    ny = 1;
  }
  if (rect.top > 300) {
    ny = -1;
  }
}
function nc() {
  nx *= -1;
  np++;
  if (np == 30) {
    document.getElementById("n").style.position = "initial";
    document.getElementById("n").style.width = "80px";
    document.getElementById("n").style.height = "50px";
    document.getElementById("n").style.fontSize = "200%";
  }
  return 0;
}
function y() {
  document.getElementById("demo").innerHTML = "<b>Yay! Thank you baby I love you 💖💖💖💖</b>";
  const colors = ["red", "orange", "yellow", "lime", "cyan", "purple"];
  document.body.style.background = [colors[col]];
  col++;
  col = col % 6;
  setTimeout(y, 1000);
}
