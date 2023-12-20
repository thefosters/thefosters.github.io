var chatContainer = document.getElementById("chatContainer");
var chatHeader = document.getElementById("chatHeader");
var chatBody = document.getElementById("chatBody");
var chatInput = document.getElementById("chatInput");

chatHeader.addEventListener("click", toggleChat);
chatInput.addEventListener("keydown", sendMessage);






function updateCountdown() {
    var chrismas_c = new Date("December 25, 2023 00:00:00").getTime();
    var currentDate = new Date().getTime();
    var timeDifference = chrismas_c - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        appendMessage("Tim:", "Sorry i do not know" );
    } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        appendMessage("Tim:", "it is in: " + `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }
}






function chech_do(you) {
  if(you == "hi" || you == "hello"){
    appendMessage("Tim:", "Hi, how can i help");

  }else if(you == "daniel" || you == "nathan" || you == "jo" || you == "howard"){
    appendMessage("Tim:", "Redirecting you to " + you);
    window.location.href = "/"+you + "/index.html";

  }else if(you == "how long till christmas"){
    updateCountdown();

  }else if(you == "bye"){
    appendMessage("Tim:", "Bye 👋");
    location.reload();
  }
  
}




function toggleChat() {
  chatContainer.style.transform = chatContainer.style.transform === "translateX(0)" ? "translateX(100%)" : "translateX(0)";
}

function sendMessage(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    var message = chatInput.value.trim();
    
    
    if (message !== "") {
      appendMessage("You", message);
      chatInput.value = "";
    }
    chech_do(message)
  }
}

function appendMessage(sender, message) {
  var messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}
