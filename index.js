
var x=Math.floor(Math.random()*6)+1;
var y=Math.floor(Math.random()*6)+1;

var ran1="./images/dice"+x+".png";
var ran2="./images/dice"+y+".png";

document.querySelector(".img1").setAttribute("src",ran1);
document.querySelector(".img2").setAttribute("src",ran2);


   if(x<y){
      document.querySelector("h1").innerHTML="player 2 wins!🏆";
    }
    else if(x>y){
        document.querySelector("h1").innerHTML="🏆player 1 wins!"; 
    }
    else{
        document.querySelector("h1").innerHTML="draw";
    }










