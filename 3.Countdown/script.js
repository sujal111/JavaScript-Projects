let destination = new Date("Jan 1, 2023 06:00:00").getTime();

let countdown = setInterval(function () {
  let now = new Date().getTime();
  let diff = destination - now;
  // console.log(diff);

  let days = Math.floor(diff / (1000 * 24 * 60 * 60));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // console.log(days);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  document.getElementById("demo").innerHTML = days + "d: " + hours + "h: " + minutes + "m: " + seconds + "s ";

}, 1000);
