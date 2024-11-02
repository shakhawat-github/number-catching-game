// form
let playerformone = document.querySelector(".playerformone");
let playerformtwo = document.querySelector(".playerformtwo");

// form buttton/submit
let playeronebtn = document.querySelector(".playeronebtn");
let playertwobtn = document.querySelector(".playetwobtn");

// form input
let playeroneinput = document.querySelector(".playeroneinput");
let playertwoinput = document.querySelector(".playertwoinput");

// input status
let inputstatusone = document.querySelector(".statusone");
let inputstatustwo = document.querySelector(".statustwo");

// form navigationbtn
const playerone = document.querySelector(".playerone");
const playertwo = document.querySelector(".playertwo");
// video
let video = document.querySelector(".video");
video.style.display = "none";

// win status
let winstatus = document.querySelector(".winstatus");

playeronebtn.addEventListener("click", () => {
  if (!playeroneinput.value || playeroneinput.value == 0) {
    inputstatusone.innerHTML = "Input must be 1-9";
    inputstatusone.style.color = "#ff0000";
    inputstatusone.style.fontSize = "14px";
  }
  if (playeroneinput.value) {
    inputstatusone.style.display = "none";
  }
  if (
    playeroneinput.value &&
    playeroneinput.value >= 1 &&
    playeroneinput.value < 10
  ) {
    playerformone.style.left = "-110%";
    playerone.classList.remove("active");
    playertwo.classList.add("active");
    playerformtwo.style.left = "0";
  }
});

playertwobtn.addEventListener("click", () => {
  if (!playertwoinput.value || playertwoinput.value == 0) {
    inputstatustwo.innerHTML = "Input must be 1-9";
    inputstatustwo.style.color = "#ff0000";
    inputstatustwo.style.fontSize = "14px";
  }
  if (
    playertwoinput.value &&
    playertwoinput.value >= 1 &&
    playertwoinput.value < 10 &&
    playertwoinput.value == playeroneinput.value
  ) {
    video.style.display = "block";
    winstatus.innerHTML = "Player two";
    playerformtwo.style.display = "none";
    playerformone.style.display = "none";
    playerone.classList.remove("active");
    playertwo.classList.add("active");
  }
  if (
    playertwoinput.value &&
    playertwoinput.value >= 1 &&
    playertwoinput.value < 10 &&
    playertwoinput.value !== playeroneinput.value
  ) {
    video.style.display = "block";
    winstatus.innerHTML = "Player one";
    playerformtwo.style.display = "none";
    playerformone.style.display = "none";
    playerone.classList.add("active");
    playertwo.classList.remove("active");
  }
});
