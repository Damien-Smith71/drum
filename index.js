var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
}
document.addEventListener("keydown",handleClick);
function handleClick(e){
var buttonInnerHTML=this.InnerHTML;
var buttonPressInnerHTML=e.key;
switch(buttonInnerHTML||buttonPressInnerHTML){
case "w":
    var tom1=new Audio("audios/tom-1.mp3");
    tom1.play();
    break;
case "a":
    var tom2=new Audio("audios/tom-2.mp3");
    tom2.play();
    break;
case "s":
    var tom3=new Audio("audios/tom-3.mp3");
    tom3.play();
    break;
case "d":
    var tom4=new Audio("audios/tom-4.mp3");
    tom4.play()
    break;
case "j":
    var crash=new Audio("audios/crash.mp3");
    crash.play()
    break;
case "k":
    var kick=new Audio("audios/kick-bass.mp3");
    kick.play()
    break;
case "l":
    var snare= new Audio("audios/snare.mp3");
    snare.play()
    break;
default:
    console.log(buttonInnerHTML);
}
}

    