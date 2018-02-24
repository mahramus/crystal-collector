$(document).ready(function () {

    //All variables

    var computerNumber;
    var userCount;
    var winCount = 0;
    var loseCount = 0;
    var isOver;
    var resultsMessage;


    function initializeGame() {
        computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        userCount = 0;
        isOver = false;
        $(".crystal-1").attr("number-value", Math.floor(Math.random() * 12) + 1);
        $(".crystal-2").attr("number-value", Math.floor(Math.random() * 12) + 1);
        $(".crystal-3").attr("number-value", Math.floor(Math.random() * 12) + 1);
        $(".crystal-4").attr("number-value", Math.floor(Math.random() * 12) + 1);
        $("#results").empty();
        $("#computer-score").text(computerNumber);
        $("#user-score").text(userCount);
    }

    initializeGame();


    function createButton() {
        if ($(resultsMessage).hasClass("win-message")) {
            var playAgainBtn = $("<button type = 'button'>");
            playAgainBtn.addClass("btn btn-success");
            playAgainBtn.text("PLAY AGAIN");
            $("#results").append(playAgainBtn);
            isOver = true;
    }

        else if ($(resultsMessage).hasClass("lose-message")) {
            var playAgainBtn = $("<button type ='button'>");
            playAgainBtn.addClass("btn btn-danger");
            playAgainBtn.text("TRY AGAIN");
            $("#results").append(playAgainBtn);
            isOver = true;
        }

    };

    // Click event for crystals

    $(".crystal").on("click", function () {

        if (isOver) return;

        else {

            crystalValue = ($(this).attr("number-value"));
            crystalValue = parseInt(crystalValue);
            userCount += crystalValue;
            $("#user-score").text(userCount);
            checkScore();
        }

    });

    function checkScore() {
        if (userCount === computerNumber) {
            winCount += 1;
            winCount = parseInt(winCount);
            $("#win-counter").text(" : " + winCount);
            var resultsMessage = $("<h1>");
            resultsMessage.addClass("win-message");
            resultsMessage.text("You Guessed It!");
            $("#results").append(resultsMessage);
            // createButton ();
            var playAgainBtn = $("<button type = 'button'>");
            playAgainBtn.addClass("btn btn-success");
            playAgainBtn.text("PLAY AGAIN");
            $("#results").append(playAgainBtn);

            isOver = true;

        }

        else if (userCount > computerNumber) {
            loseCount += 1;
            loseCount = parseInt(loseCount);
            $("#loss-counter").text(" : " + loseCount);
            var resultsMessage = $("<h1>");
            resultsMessage.addClass("lose-message");
            resultsMessage.text("You Went Over.");
            $("#results").append(resultsMessage);
            // createButton ();
            var playAgainBtn = $("<button type ='button'>");
            playAgainBtn.addClass("btn btn-danger");
            playAgainBtn.text("TRY AGAIN");
            $("#results").append(playAgainBtn);

            isOver = true;

        }

    };

    $("#results").on("click", ".btn", initializeGame);

});

