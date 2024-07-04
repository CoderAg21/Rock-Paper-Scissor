//Global variables
let threeNames = ['Rock', 'Paper', 'Scissor'];
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
let info = document.querySelector(".info");
let user = document.querySelector(".user");
let computer = document.querySelector(".computer");
let userScore = 0;
let computerScore = 0;
let computerVal = null;


//creating event when user click any of the imgs to sart the game
const gameRun = (e) => {
    // giving value to the computer any one from the three 
    computerVal = threeNames[Math.floor(Math.random() * threeNames.length)]

    //adding transitions to the three images
    e.style.transform = "Scale(.5) Rotate(-90deg)"
    setTimeout(() => {
        e.style.transform = "Scale(1) Rotate(-90deg)"

    }, 100);




    // writing the logic of the game
    if (e.alt == computerVal) {
        matchDraw()
    }

    else if ((e.alt == 'Rock' && computerVal == "Scissor")) {
        // console.log("User wins")
        userWins()


    }
    else if ((e.alt == 'Paper' && computerVal == "Rock")) {
        userWins()
        // console.log("User wins")

    }
    else if ((e.alt == 'Scissor' && computerVal == "Paper")) {
        userWins()
        // console.log("User wins")
    }

    else {
        computerWins()
        // console.log("Computer wins", e.alt)
    }

    function userWins() {
        userScore += 1;
        info.innerHTML = `User's choice: <i style = 'color:#a3ff00'>${e.alt}</i>&nbsp; <i style = "color:black">||</i>&nbsp; Computer's Choice: <i style = 'color:#a3ff00'>${computerVal}</i><br<br>User wins`;
        user.innerText = `User Score: ${userScore}`;

    }
    function computerWins() {
        computerScore += 1;
        info.innerHTML = `User's choice: <i style = 'color:#a3ff00'>${e.alt}</i>&nbsp; <i style = "color:black">||</i>&nbsp; Computer's Choice: <i style = 'color:#a3ff00'>${computerVal}</i><br><br>Computer wins`;
        computer.innerText = `Computer Score: ${computerScore}`;

    }
    function matchDraw() {
        userScore += 0;
        computerScore += 0;
        info.innerHTML = `User's choice: <i style = 'color:#a3ff00'>${e.alt}</i>&nbsp; <i style = "color:black">||</i>&nbsp; Computer's Choice: <i style = 'color:#a3ff00'>${computerVal}</i><br><br>Match Draw`;

    }


}
img1.addEventListener("click", function () {
    gameRun(img1)
})
img2.addEventListener("click", function () {
    gameRun(img2)
})
img3.addEventListener("click", function () {
    gameRun(img3)
})

window.addEventListener("load", (event) => {
  (new Audio("music.mp3")).play();
});
