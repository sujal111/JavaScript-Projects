const countwordschars = () => {
  let noOfChars = document.getElementById("words").value.length;
  let noOfWords = document.getElementById("words").value;
  noOfWords = noOfWords.match(/\w+/g);
  noOfWords = noOfWords.length;
  console.log(noOfWords);
  document.getElementById("showdata").innerHTML = "The Total Characters: " + noOfChars;
  document.getElementById("showwordscount").innerHTML = "The Total Words: " + noOfWords;
}
