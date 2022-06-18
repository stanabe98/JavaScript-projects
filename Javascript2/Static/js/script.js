
function ageInDays() {
    var birthYear= prompt('what year where you born?');
    var ageInDays2 = (2022-birthYear)*365;
    var h1= document.createElement('h1');

    var textAnswer= document.createTextNode('You are ' + ageInDays2 + ' days Old');   
    h1.setAttribute('id', 'ageInDays');
    h1.append(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
 
}

function reset(){
    document.getElementById('ageInDays').remove();
    
}

function generateCat(){
    var image=document.createElement('img');
    image.setAttribute('id','catpic');
    var div= document.getElementById("flex-cat-gen");
    image.setAttribute('id', 'generateCat');
    image.src="Static/images/cat.png";
    div.appendChild(image);
//    
}

function deleteCat(){

    document.getElementById('generateCat').remove();

    
}


function resetImages(){

var images = document.getElementsByTagName('img');

var l = images.length;

for (var i = 0; i < l; i++) {
    // images[0].parentNode.removeChild(images[0]);
    document.getElementById('generateCat').remove();
}
}

// challenge 3
function rpsGame(yourChoice) {

    var humanchoice, botchoice, number;
    humanchoice=yourChoice.id;
    console.log(humanchoice);


    number= randToRpsInt();
    botchoice=numberToChoice(number);

    console.log(botchoice);

    results= decideWinner(humanchoice,botchoice);
    results1=results[0];
    results2=results[1];

    message= finalMessage(results1,results2);
    
    rpsFrontEnd(humanchoice, botchoice, message);
    finalMessageCheck();

}


function randToRpsInt() {
    return Math.floor(Math.random()*3);
}


function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, botchoice){
    var rpsData= {
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5, 'scissors':0},
        'scissors':{'paper':1,'scissors':0.5, 'rock':0},
     };


    var yourScore= rpsData[yourChoice][botchoice];
    var computerScore= rpsData[botchoice][yourChoice];
    console.log(yourScore);
    console.log(computerScore)

    return [yourScore, computerScore];
}

// function decideWinner(yourChoice, botchoice){

  
//     var yourScore= rpsData[yourChoice][botchoice];
//     var computerScore= rpsData[botchoice][yourChoice];

//     return [yourScore, computerScore];
// }


function finalMessage(yourScore, computerScore){
    
    console.log(yourScore);
    console.log(computerScore);
   
    if( yourScore == 0){ 
        return{'message': 'You lost!','color':'red'}
    }
    else if(yourScore == 0.5){
        return{'message': 'You tied!', 'color':'yellow'}
    }
    else{
        return{'message': 'You Won!', 'color':'red'}
    }    
}

function finalMessageCheck(){

    // if (finalMessage['message']== 'You lost!' || finalMessage['message']== 'You Won!'|| finalMessage['message']== 'You tied!'){
    //     console.log('hello');
    //     return true;
    // }
    
    if(messageDiv){
        console.log('hello')
        return true;
    }
    
    
}
 

function rpsFrontEnd(humanchoice, botchoice, finalMessage){
    var ImageData= {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv= document.createElement('div');
    humanDiv.setAttribute('id', 'humanDiv')
    var botDiv= document.createElement('div');
    botDiv.setAttribute('id', 'botDiv')
    var messageDiv=document.createElement('div');
    messageDiv.setAttribute('id', 'messageDiv')


    humanDiv.innerHTML= "<img src='" + ImageData[humanchoice] + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML="<img src='" + ImageData[botchoice] + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243,38,23,1);'>"
    messageDiv.innerHTML= "<h1 style= color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}


function rpsFrontEndReset(){

    if(finalMessageCheck()==true){

        document.getElementById('humanDiv').remove();
        document.getElementById('botDiv').remove();
        document.getElementById('messageDiv').remove();
   




        var rockDiv = document.createElement('img');
        var paperDiv= document.createElement('img');
        var scissorsDiv=document.createElement('img');

        // rockDiv.innerHTML= "<img id='rock' src='Static/images/Rock_icon.webp' height=150 width=150 alt='' onclick='rpsGame(this)' >"
        // paperDiv.innerHTML="<img id='paper' src='Static/images/paper.png' height=150 width=150 alt='' onclick='rpsGame(this)'>"
        // scissorsDiv.innerHTML="<img id='scissors' src='Static/images/scissors.png' height=150 width=150 alt='' onclick='rpsGame(this)'>"
        
        
        rockDiv.src="Static/images/Rock_icon.webp";
        rockDiv.setAttribute('id', 'rock')
        rockDiv.setAttribute('onclick', 'rpsGame(this)')
        rockDiv.height = 150;
        rockDiv.width=150;
        rockDiv.alt=""


        paperDiv.src="Static/images/paper.png";
        paperDiv.setAttribute('id', 'paper')
        paperDiv.setAttribute('onclick', 'rpsGame(this)')
        paperDiv.height= 150;
        paperDiv.width=150;


        scissorsDiv.src="Static/images/scissors.png";
        scissorsDiv.setAttribute('id','scissors')
        scissorsDiv.setAttribute('onclick', 'rpsGame(this)')
        scissorsDiv.height= 150;
        scissorsDiv.width=150;

    

        // rockDiv.alt=''
        // rockDiv.onclick= rpsGame(this);
        
        document.getElementById('flex-box-rps-div').appendChild(rockDiv);
        document.getElementById('flex-box-rps-div').appendChild(paperDiv);
        document.getElementById('flex-box-rps-div').appendChild(scissorsDiv);

        
    }
}


// Changing all buttons




var all_buttons= document.getElementsByTagName('button');
var copyAllButtons= ['btn-primary', 'btn-danger', 'btn-success', 'btn-danger', 'btn-success', 'btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
var buttonlist=[];

for( let i=0; i<all_buttons.length;i++){
    buttonlist.push(all_buttons[i].classList[1]);
}


function buttonColourChange(button){
    if(button.value=== 'green'){
        GreenButton();
    }
    else if(button.value=== 'red'){
        RedButton();
    }else if(button.value=== 'random'){
        RandomButton();
    }
    else if(button.value=== 'reset'){
        ResetColourButton();
    }

}





function GreenButton(){

   
    for( let i=0; i<9;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }

}

function RedButton(){

  
    for( let i=0; i<9;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function RandomButton(){
    let choices=['btn-primary', 'btn-danger', 'btn-success','btn-warning']

    for( let i=0; i<9;i++){
        let randomNo= Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNo]);
    }
}

function ResetColourButton(){
    
    for(let i=0; i<9; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(buttonlist[i]);
    }
    console.log(copyAllButtons);
}




 



