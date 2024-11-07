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
  if (!playeroneinput.value || playeroneinput.value <= 0 || playeroneinput.value >=10) {
    inputstatusone.innerHTML = "Input must be 1-9";
    inputstatusone.style.color = "#ff0000";
    inputstatusone.style.fontSize = "14px";
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

let click = 4;
playertwobtn.addEventListener("click", () => {
  if(!playertwoinput.value || playertwoinput.value <= 0 || playertwoinput.value >= 10){
    inputstatustwo.style.color = 'red';
    inputstatustwo.innerHTML = 'please enter number 1-9';
  }
  else{
    if(playertwoinput.value && playertwoinput.value > 0 && playertwoinput.value < 10 && playeroneinput.value != playertwoinput.value){
      inputstatustwo.style.color = 'red';
      click -= 1;
      inputstatustwo.innerHTML = `Try again , You can try ${click} times`;
    }
    
    if(playertwoinput.value && playertwoinput.value > 0 && playertwoinput.value < 10 && playeroneinput.value != playertwoinput.value && click == 0){
      playerformtwo.style.display = "none";
      playerformone.style.display = "none";
      winstatus.innerHTML = "Player one";
      video.style.display = "block";
      playerone.classList.add("active");
      playertwo.classList.remove("active");
    }
    if(playertwoinput.value && playertwoinput.value > 0 && playertwoinput.value < 10 && playeroneinput.value == playertwoinput.value){
      playerformtwo.style.display = "none";
      playerformone.style.display = "none";
      video.style.display = "block";
      winstatus.innerHTML = "Player two";
      playerone.classList.remove("active");
      playertwo.classList.add("active");
    }
  }
});

document.querySelector('.reset').addEventListener('click' , ()=>{
  location.reload();
})