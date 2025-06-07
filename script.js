let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
     document.querySelector("#msg").innerText="It's a draw";
     document.querySelector("#msg").style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin===true){
            document.querySelector("#msg").innerText=`You win! Your ${userChoice} beats ${compChoice}`;
            document.querySelector("#msg").style.backgroundColor="green";
            document.querySelector("#user-score").innerText=`${++userScore}`;
        }else {
            document.querySelector("#msg").innerText=`You lost. ${compChoice} beats your ${userChoice}`;
            document.querySelector("#msg").style.backgroundColor="red";
            document.querySelector("#comp-score").innerText=`${++compScore}`;
        }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice === "paper"){
            userWin=compChoice === "scissors"?false:true;
        }else{
            userWin=compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})

