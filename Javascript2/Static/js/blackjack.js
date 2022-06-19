let blackjackGame= {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'wins':0,
    'losses':0,
    'draws':0, 
    'isStand':false,
    'turnsOver':false,

};


const YOU= blackjackGame['you'];
const DEALER= blackjackGame['dealer'];
const CARDS= blackjackGame['cards'];
const hit_sound=new Audio('Static/sounds/swish.m4a');
const aww_sound=new Audio('Static/sounds/aww.mp3');
const cash_sound=new Audio('Static/sounds/cash.mp3');



document.querySelector('#hit-button').addEventListener('click',blackjackHit);
document.querySelector('#deal-button').addEventListener('click',blackjackDeal);
document.querySelector('#stand-button').addEventListener('click',dealerLogic);




function cardValue(card, score){
    if(card=='K'|| card=='J'|| card=='Q'){
        return 10
    }else if(card=='A' && score>10){
        return 1
    }else if( card=='A' && score<11){
        return 11
    }
    else{
        return card;    
    } 
}


function gamePlay(Player){

    if(Player['score']<=21){
        
        let cardImage= document.createElement('img');
    
        let randomNo= Math.floor(Math.random()*13);
        randomCard= CARDS[randomNo];
        cardImage.src= 'Static/images/blackjack_images/'+randomCard+ '.png';
        
        let cardworth=parseInt(cardValue(randomCard,Player['score']));
        Player['score']=Player['score']+cardworth;
        let newScore=Player['score'];
        

        if(Player['score']<=21){
        hit_sound.play();
        document.querySelector(Player['div']).appendChild(cardImage);
        document.querySelector(Player['scoreSpan']).textContent=newScore;
        }else{
            document.querySelector(Player['scoreSpan']).textContent= 'BUST!';
            document.querySelector(Player['scoreSpan']).style.color= 'red';
        }
    
    };

}

function blackjackDeal(){

    if(blackjackGame['turnsOver']===true){

        blackjackGame['isStand']=false;

        let yourImages= document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages= document.querySelector('#dealer-box').querySelectorAll('img');

        for(i=0; i<yourImages.length; i++){
            yourImages[i].remove();
        }

        for(i=0; i<dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score']=0;
        DEALER['score']=0;

        document.querySelector(YOU['scoreSpan']).textContent=0;
        document.querySelector(DEALER['scoreSpan']).textContent=0;

        document.querySelector(YOU['scoreSpan']).style.color='#fff';
        document.querySelector(DEALER['scoreSpan']).style.color='#fff';

        document.querySelector('#blackjack-result').textContent="Let's play";
        document.querySelector('#blackjack-result').style.color='black';

        blackjackGame['turnsOver']=false;
    }
}


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}


function randomCardfunction(){
    let randomNo= Math.floor(Math.random()*13);
    randomCard= CARDS[randomNo];
    cardImage.src= `Static/images/blackjack_images/${randomCard}.png`;
    return randomCard
}


function blackjackHit(){
    if(blackjackGame['isStand']===false){
    gamePlay(YOU);
}
} 

async function dealerLogic(){
    blackjackGame['isStand']=true;

    while (DEALER['score']<16 && blackjackGame['isStand']===true){
        gamePlay(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver']=true;
    let winner=findWinner();
    showResult(winner);
    
};





function findWinner(){
    console.log(YOU['score'], DEALER['score']);
    let winner;
    if(YOU['score']<=21){
        if(YOU['score'] >DEALER['score'] || DEALER['score']>21){ 
            blackjackGame['wins']++;
            winner= YOU;
        }
        else if( YOU['score']< DEALER['score']){
 
            blackjackGame['losses']++;
            winner= DEALER;
        }
        else if(YOU['score']=== DEALER['score']){
            blackjackGame['draws']++;

        }
    }else if (YOU['score']>21 && DEALER['score']<=21){
        blackjackGame['losses']++;
        winner= DEALER;
    }else if (YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draws']++;
    }
    
    console.log('Winner is', winner)
    return winner;
}


function showResult(winner){

    let message, messageColour;

    if(blackjackGame['turnsOver']===true){

        if (winner===YOU){
            document.querySelector('#wins').textContent=blackjackGame['wins'];
            message='You won!';
            messageColour='green';
            cash_sound.play();
        }
        else if(winner=== DEALER){
            document.querySelector('#losses').textContent=blackjackGame['losses'];
            message='You lost!';
            messageColour='red';
            aww_sound.play();
        }
        else{
            document.querySelector('#draws').textContent=blackjackGame['draws'];
            message='You drew!';
            messageColour='black';       
        }

        document.querySelector('#blackjack-result').textContent= message;
        document.querySelector('#blackjack-result').style.color= messageColour;
    }
}









