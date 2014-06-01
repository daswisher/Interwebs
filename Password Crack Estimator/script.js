var calculateComplexity = function (password, possibilites) {
    return Math.pow(possibilites, password.length)
};
var computerSpeed = 4200000000;
var totalPossibilities = 68;
var timeEstimate = function (password) {
    return (calculateComplexity(password, totalPossibilities) / computerSpeed);
};
var formatTime = function (timeEstimate) {
    /*years*/
    if (timeEstimate > 31104000) {
        return (timeEstimate / 31104000).toFixed(3);
    }
        /*months*/
    else if (timeEstimate > 2592000) {
        return (timeEstimate / 2592000).toFixed(3);
    }
        /*days*/
    else if (timeEstimate > 86400) {
        return (timeEstimate / 86400).toFixed(3);
    }
        /*hours*/
    else if (timeEstimate > 3600) {
        return (timeEstimate / 3600).toFixed(3);
    }
        /*minutes*/
    else if (timeEstimate > 60) {
        return (timeEstimate / 60).toFixed(3);
    }
        /*seconds*/
    else {
        return timeEstimate;
    }
};
$(document).ready(function () {
    $("input").keyup(function () {
        var input = $('input:password').val();
        var runTime = timeEstimate(input);
        var units;
        if (runTime > 31104000) {
            units = "years";
        }
        else if (runTime > 2592000) {
            units = "months";
        }
        else if (runTime > 86400) {
            units = "days";
        }
        else if (runTime > 3600) {
            units = "hours";
        }
        else if (runTime > 60) {
            units = "minutes";
        }
        else {
            units = "seconds";
        }
        $("#password-label").text("Cracking your password would take " + formatTime(runTime) + " " + units);
    });
});
