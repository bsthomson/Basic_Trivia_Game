$(document).ready(function() {
    var count = 60;
    var counter=setInterval(timer, 1000);
    var scoreScreen = function() {
        clearTimeout(counter);
        $("#submit").empty();
        var correctAnswers = 0;
        // I'm trying cycle through all selected radio inputs and turn them into numbers while putting them in an array and adding them up but I don't think I've stumbled onto the correct solution yet.
        $(".form-check-input").prop('checked', false);
        $(".screen").text("You scored " + values + " out of 6!")
        $(".screen").append("<button type='button' class='btn btn-success' id='tryagain'>Try Again</button>")
        console.log(values);
    
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
    $("#submit").on("click", scoreScreen);

    
});