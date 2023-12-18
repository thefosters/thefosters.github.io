var targetDate = new Date("December 25, 2023 00:00:00").getTime();

var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("chrismas_c").innerHTML = "Countdown expired!";
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    }
}

var targetDate = new Date("October 22, 2024 00:00:00").getTime();

var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("nathan_c").innerHTML = "Countdown expired!";
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    }
}

var targetDate = new Date("February 4, 2024 00:00:00").getTime();

var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("jo_c").innerHTML = "Countdown expired!";
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    }
}

var targetDate = new Date("April 19, 2024 00:00:00").getTime();

var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("daniel_c").innerHTML = "Countdown expired!";
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    }
}

var targetDate = new Date("November 16, 2024 00:00:00").getTime();

var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("howard_c").innerHTML = "Countdown expired!";
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    }
}