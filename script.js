let message = document.querySelector(".message");
let btn = document.querySelector(".btn-change");

messageArray = ["The most affordable learning platform", "PW Skills"];

message.textContent = messageArray[0];

btn.addEventListener("click", () => {
  if (message.textContent === messageArray[0]) {
    message.textContent = messageArray[1];
  } else {
    message.textContent = messageArray[0];
  }
});
