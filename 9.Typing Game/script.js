const setofWords = ["My name is Subhadip Chatterjee and I am learning Full Stack JavaScript Web Development from iNeuron mentored by Hitesh Choudhary Sir.",
  "Hope you are having fun, this is a simple game you can make",
  "Learning is a never ending process, learn always to be a better human being",
];

const msg = document.getElementById("message");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setofWords.length);
  msg.innerText = setofWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
}

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime - startTime) / 1000);
  // console.log(totalTime);
  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = `You typed total at ${speed} words per minute. `;

  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  })
  let errorWords = (words1.length - cnt);
  return (cnt + " Correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".");
}

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
}

btn.addEventListener('click', function () {
  if (this.innerText == 'Start') {
    typeWords.disabled = false;
    playGame();
  }
  else if (this.innerText = "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
})