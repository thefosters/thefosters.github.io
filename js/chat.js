var chatContainer = document.getElementById("chatContainer");
var chatHeader = document.getElementById("chatHeader");
var chatBody = document.getElementById("chatBody");
var chatInput = document.getElementById("chatInput");

chatHeader.addEventListener("click", toggleChat);
chatInput.addEventListener("keydown", sendMessage);

function chech_do(you) {
  if(you == "hi" || you == "hello"){
    appendMessage("Tim:", "Hi, how can i help");

  }else if(you == "daniel" || you == "nathan"){
    appendMessage("Tim:", "Redirecting you to " + you);
    window.location.href = "/"+you + "/index.html"
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
