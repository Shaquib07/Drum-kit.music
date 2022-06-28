var num = document.querySelectorAll(".drum").length;
var i = 0;
while (i < num) {
  document.querySelectorAll(".drum")[i].addEventListener("click", onclick);
  i++;
}

function onclick() {
  soundPress(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

//keypress using anonoymous function---
// document.addEventListener("keypress",function(event){
//  var ch=this.innerHTML;
//   soundPress(event.key);
//   buttonAnimation(event.key);
// }

function soundPress(key)
{
    console.log("key",key);
  switch (key)
  {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    //  default: //prompt("please press relevant button or input sequence key to play music");
  }
}

// adding animation to the buttons----
function buttonAnimation(btn){
  var activeButton=document.querySelector("." + btn);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")}
    ,100);
}

// input kit sequence from user ----
  function userInput(event)
  {
    event.preventDefault();
    var inp = document.getElementById('sequence').value;
      var arrayinp=inp.split("");  // string to array
      arrayinp.forEach((ch, i)=>  {  //ecmascript 6
        setTimeout(function(){
          console.log(ch);
          soundPress(ch);
        }
           ,150*i);
      });
}
