const heart = document.querySelector(".yurak");
const path = document.querySelector(".path");

function bosing2() {
  document.querySelector(".yurakk").style.fill = "#f95555";
  document.querySelector(".pathh").style.stroke = "#f95555";
}
function bosing1() {
  document.querySelector(".yurak").style.fill = "#f95555";
  document.querySelector(".path").style.stroke = "#f95555";
}
function bosing3() {
  document.querySelector(".yurakkk").style.fill = "#f95555";
  document.querySelector(".pathhh").style.stroke = "#f95555";
}

//******************************carusel******************************

const imges = document.querySelectorAll(".imges img");
const left = document.querySelector(".chapga");
const right = document.querySelector(".ungga");
const imgLength = imges.length - 1;
let position = 0;

function yashir() {
  for (const img of imges) {
    img.classList.remove("opacity");
  }
}
const leftMove = () => {
  yashir();
  if (position === imgLength) {
    position = 0;
  } else {
    position++;
  }
  imges[position].classList.add("opacity");
};
const rightMove = () => {
  yashir();
  if (position === 0) {
    position = imgLength;
  } else {
    position--;
  }
  imges[position].classList.add("opacity");
};

right.addEventListener("click", rightMove);
left.addEventListener("click", leftMove);   


function show() {
  document.getElementById("id").style.display = "block";
  document.getElementById("id").style.background = "#f3f0ec"
}
function login() {
  let userName = document.getElementById("user").value;
  document.getElementById("iden").innerHTML = userName;
  document.getElementById("btn").style.display = "none";
  document.getElementById("Admin").style.display = "flex";
  document.getElementById("id").style.display = "none";
}
function nam() {
  // document.getElementById("butn").style.display = "none"
  document.getElementById("Admin").style.display = "none";
  document.getElementById("btn").style.display = "block";
}
function namm() {
  // document.getElementById("butn").style.display = "block"
  let usersName = document.getElementById("user").value;
  document.getElementById("usersName").innerHTML = usersName;
  let userPassword = document.getElementById("password").value;
  document.getElementById("usersPassword").innerHTML = userPassword;
}







