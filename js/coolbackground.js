function generateRandomColor() {
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;
}

function setRandomBackgroundColor() {
  document.querySelector('.background').style.backgroundColor = generateRandomColor();
}

function darkmode(){
  window.sessionStorage.coolbackground = "no";
  document.querySelector('.background').style.backgroundColor = "#000";
  var darkb = document.getElementById("dark");
  var lightb = document.getElementById("light");
  document.querySelector('.contanory').style.backgroundColor = "#000";
  darkb.classList.add("hiden");
  lightb.classList.remove("hiden");
  clearInterval(coolbackground2)
}

function lightmode(){
  window.sessionStorage.coolbackground = "yes";
  document.querySelector('.background').style.backgroundColor = "#a561f5";
  var darkb = document.getElementById("dark");
  var lightb = document.getElementById("light");
  document.querySelector('.contanory').style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  darkb.classList.remove("hiden");
  lightb.classList.add("hiden");
  coolbackground2 = setInterval(setRandomBackgroundColor, 1000);
}

let coolbackground = sessionStorage.getItem("coolbackground");
if (coolbackground != "no"){
  coolbackground2 = setInterval(setRandomBackgroundColor, 1000);
}

if(coolbackground == "no"){
  document.querySelector('.background').style.backgroundColor = "#000";
  var darkb = document.getElementById("dark");
  var lightb = document.getElementById("light");
  darkb.classList.add("hiden");
  lightb.classList.remove("hiden");
}
