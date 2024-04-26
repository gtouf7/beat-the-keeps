window.onload = gameON;

function gameON() {
    let startButton = document.getElementById("startGame");
    var game = document.getElementById("turf");
    var openingScreen = document.getElementById("welcome-screen");
    
    game.style.display = "none";
    startButton.onclick = gameStarts;

        var ball = document.getElementById("ball");
        var goalie = document.getElementById("gk");

        var leftShot = document.getElementById("left-dir");
        var middleShot = document.getElementById("center-dir");
        var rightShot = document.getElementById("right-dir");
    
        var scoreboard = document.getElementById("scoreboard");
        var playerScore = document.getElementById("yourScore");
        var goalieScore = document.getElementById("goalieScore");

        var endMessage = document.getElementById("endMsg");
        var innerMsg = document.getElementById("msg");

        scoreboard.style.display = "none";
        endMessage.style.display = "none";

        function gameStarts() {
            game.style.display = "block";
            openingScreen.style.display = "none";
            scoreboard.style.display = "block";
            console.log("pageworks");
        }
        // TOTAL SCORE COUNT FUNCTION
        function scoreCount(){ 
            if (counter === 10) {
               setTimeout(function() { 
                if (playerScoreCount > goalieScoreCount) {
                  game.style.display = "none";
                  scoreboard.style.display = "none";
                  endMessage.style.display = "block";
                  innerMsg.innerHTML = "YOU WIN!"
                  console.log("pageworks");  
                } else if (playerScoreCount === goalieScoreCount) {
                  game.style.display = "none";
                  scoreboard.style.display = "none";
                  endMessage.style.display = "block";
                  innerMsg.innerHTML = "IT'S A TIE!"
                } else {
                  game.style.display = "none";
                  scoreboard.style.display = "none";
                  endMessage.style.display = "block";
                  innerMsg.innerHTML = "YOU LOST..."
                }
            }, 2000);
            }
        }
        //score declaration
        var playerScoreCount = 0;
        var goalieScoreCount = 0;
        playerScore.innerHTML = playerScoreCount;
        goalieScore.innerHTML = goalieScoreCount;
        var counter = 0;
        leftShot.addEventListener('click', function() {
            var gkDiveDir = Math.ceil(Math.random() * 3 );
            if (gkDiveDir === 1) {
                goalie.style.animationName = "gkLeft";
                ball.style.animationName = "missedLeft";
                goalieScoreCount++;
                counter++;
                goalieScore.innerHTML = goalieScoreCount;
                scoreCount();
            } else {
                ball.style.animationName = "shootLeft"
                ball.style.animationDuration = "1s";
                playerScoreCount++;
                counter++;
                playerScore.innerHTML = playerScoreCount;
                scoreCount();
            }
        });

        middleShot.addEventListener('click', function() {
            var gkDiveDir = Math.ceil(Math.random() * 3 );
            if (gkDiveDir === 2) {
                ball.style.animationName = "missedCenter";
                goalieScoreCount++;
                counter++;
                goalieScore.innerHTML = goalieScoreCount;
                scoreCount();
            } else {
                if (gkDiveDir === 1) {
                    ball.style.animationName = "shootCenter";
                    ball.style.animationDuration = "1s";
                    playerScoreCount++;
                    counter++;
                    playerScore.innerHTML = playerScoreCount;
                    goalie.style.animationName = "gkLeft";
                    scoreCount();
                } else {
                    ball.style.animationName = "shootCenter";
                    goalie.style.animationName = "gkRight";
                    playerScoreCount++;
                    counter++;
                    playerScore.innerHTML = playerScoreCount;
                    scoreCount();
                }
            }
        });

        rightShot.addEventListener('click', function() {
            var gkDiveDir = Math.ceil(Math.random() * 3 );
            if (gkDiveDir === 3) {
                goalie.style.animationName = "gkRight";
                ball.style.animationName = "missedRight";
                goalieScoreCount++;
                counter++;
                goalieScore.innerHTML = goalieScoreCount;
                scoreCount();
            } else {
                ball.style.animationName = "shootRight";
                goalie.style.animationName = "gkLeft";
                ball.style.animationDuration = "1s";
                playerScoreCount++;
                counter++;
                playerScore.innerHTML = playerScoreCount;
                scoreCount();
            }

        });

        ball.addEventListener('animationend', function() {
            ball.style.animationName = "none";
        });

        goalie.addEventListener('animationend', function() {
            goalie.style.animationName = "none";
        });
        let playAgainBtn = document.getElementById("playAgain");
        
        playAgainBtn.onclick = refresh;
        function refresh() {
            location.reload();
        }
}