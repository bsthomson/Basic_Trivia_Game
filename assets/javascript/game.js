$(document).ready(function() {
    // amount of time
    var count = 60;
    // timer counter
    var counter=setInterval(timer, 1000);
    var scoreScreen = function() {
        clearTimeout(counter);
        $("#submit").empty();
        var correctAnswers = 0;
        // makes sure right answers are selected
        if (document.getElementById('inlineRadior').checked) {
           correctAnswers++;
        };
        if (document.getElementById('inlineRadio2r').checked) {
            correctAnswers++;
        };
        if (document.getElementById('inlineRadio3r').checked) {
            correctAnswers++;
        };
        if (document.getElementById('inlineRadio4r').checked) {
            correctAnswers++;
        };
        if (document.getElementById('inlineRadio5r').checked) {
            correctAnswers++;
        };
        if (document.getElementById('inlineRadio6r').checked) {
            correctAnswers++;
        };
        console.log(correctAnswers);
        // unchecks radio circles
        $(".form-check-input").prop('checked', false);
        $(".screen").text("You scored " + correctAnswers + " out of 6!")
        $(".screen").append("<button type='button' class='btn btn-success' id='tryagain'>Try Again</button>");    
        $("#tryagain").on("click", function(){
            clearTimeout(counter);
            $(".screen").text('');
            $(".screen").html("<button type='button' class='btn btn-success' id='submit'>Submit</button>");
            count=60;
            setInterval(timer, 1000);
            console.log("yo")
            return;
        });
    };
        

    
    function timer() {
        count=count-1
        if (count <=0)
        {
            clearInterval(counter);
            scoreScreen();
            return;
        }
        $("#timer").text(count+ " secs")
    }
    // Submit button doesn't work second time
    $(document.body).on("click", "#submit", scoreScreen);

    
});