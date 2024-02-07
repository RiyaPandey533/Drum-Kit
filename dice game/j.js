//var result;
var z1=Math.floor(Math.random()*6)+1;
function changeImage1(image){
    if(z1===1){
        image.src='./images/dice1.png';
    }
    if(z1===2){
        image.src='./images/dice2.png';
    }
    if(z1===3){
        image.src='./images/dice3.png';
    }
    if(z1===4){
        image.src='./images/dice4.png';
    }
    if(z1===5){
        image.src='./images/dice5.png';
    }
    if(z1===6){
        image.src='./images/dice6.png';
    }
}

var z2=Math.floor(Math.random()*6)+1;
function changeImage2(image){
        if(z2===1){
            image.src='./images/dice1.png';
        }
        if(z2===2){
            image.src='./images/dice2.png';
        }
        if(z2===3){
            image.src='./images/dice3.png';
        }
        if(z2===4){
            image.src='./images/dice4.png';
        }
        if(z2===5){
            image.src='./images/dice5.png';
        }
        if(z2===6){
            image.src='./images/dice6.png';
        }
}
if(z1>z2){
    document.querySelector("h1").innerHTML="Player1 wins";
    }
    else{
        document.querySelector("h1").innerHTML="Player2 wins";
    }

document.querySelectorAll("img")[0]setAttribute("src, changeImage1");
//console.log(z);
