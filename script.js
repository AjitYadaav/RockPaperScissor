
let computerMove = '';
function pickComputerMove(){
    const randomNumber = Math.random();//generates random number : [0,1)
    //Note var doesn't follows scope rules

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

}
