var randomNo1=Math.floor((Math.random() * 6) + 1);

var  randomDiceImage  = "dice" + randomNo1 +".png";
var  randomImageSrc    = "images/"+ randomDiceImage ;
var image1 = document.querySelectorAll("img")[0];  //grabbing 1st img 
image1.setAttribute("src",randomImageSrc);

var randomNo2 = Math.floor((Math.random()*6) + 1);

var  randomDiceImage2  = "dice" + randomNo2 +".png";
var  randomImageSrc2    = "images/"+ randomDiceImage2 ;
var image2 = document.querySelectorAll("img")[1]; //grabbing 2nd img in our queryselector

image2.setAttribute("src",randomImageSrc2);


if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML=" 🎊 Player 1 wins !"
    
}
else if(randomNo1 < randomNo2){
    document.querySelector("h1").innerHTML=" 🎊Player 2 wins !"
}

else{
    document.querySelector("h1").innerHTML="Draw"
}
