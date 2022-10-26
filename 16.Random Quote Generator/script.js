let realData = " ";
let quotesData = " ";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweetMe = document.getElementById("tweetMe");

const tweetNow = () => {
  let tweetpost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
  window.open(tweetpost);
}

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 20);
  quotesData = realData[rnum];
  // console.log(realData[rnum].text); //randomly text & author generated
  // console.log(realData[rnum].author);
  quotes.innerText = `${quotesData.text}`;
  quotesData.author == null
    ? (author.innerText = "unknown")
    : (author.innerText = `${quotesData.author}`);
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
    // console.log(realData[30].text); //getting the 10th line of quotes
    // console.log(realData[30].author);

  } catch (error) { }
};
tweetMe.addEventListener("click", tweetNow);
newQuotes.addEventListener('click', getNewQuotes);

getQuotes();