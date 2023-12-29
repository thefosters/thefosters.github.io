var chrismas_c = new Date("December 25, 2024 00:00:00").getTime();


var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeDifference = chrismas_c - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("chrismas_c").innerHTML = "Countdown expired!";
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("chrismas_c").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
}
