const textInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
let infoText = document.querySelector(".info-txt");
let userInput;

checkBtn.addEventListener("click", () => {
  let reverseInput = userInput.split("").reverse().join("");
  infoText.style.display = "block";
  if (userInput != reverseInput) {
    return infoText.innerHTML = `No, <span>${textInput.value}</span> is not a Palindrome!!`;
  }
  else {
    infoText.innerHTML = `Yes, <span>${textInput.value}</span> is a Palindrome!!`;
  }
});

textInput.addEventListener("keyup", () => {
  userInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  if (userInput) {
    return checkBtn.classList.add("active");
  } else {
    infoText.style.display = "none";
    checkBtn.classList.remove("active");
  }
});