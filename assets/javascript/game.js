$(document).ready(function () {

    //All variables

    var computerNumber;
    var userCount;
    var winCount = 0;
    var loseCount = 0;
    var isOver;

    // End of all variables

    function initializeGame() {
        computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        userCount = 0;
        $("user-score, #results").empty();
        $("#computer-score").text(computerNumber);
        isOver = false;

    }

    initializeGame();

    // Creating crystal numbers

    // for (var i = 0; i < 4; i++) {

    $(".crystal-1").attr("number-value", Math.floor(Math.random() * 12) + 1);
    $(".crystal-2").attr("number-value", Math.floor(Math.random() * 12) + 1);
    $(".crystal-3").attr("number-value", Math.floor(Math.random() * 12) + 1);
    $(".crystal-4").attr("number-value", Math.floor(Math.random() * 12) + 1);

    // var crystalImage1 = $("<img src='assets/images/crystal.jpg'>");

    // crystalImage1.addClass("crystal crystal-size img-fluid");

    // crystalImage1.attr("number-value", Math.floor(Math.random() * 12) + 1);

    // $("#slot1").append(crystalImage1);

    // }

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
            var playAgainBtn = $("<button>");
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
            var playAgainBtn = $("<button>");
            playAgainBtn.addClass("btn btn-danger");
            playAgainBtn.text("TRY AGAIN");
            $("#results").append(playAgainBtn);

            isOver = true;

        }

    };

    $(".btn").on("click", function () {
        initializeGame();
    });


});

