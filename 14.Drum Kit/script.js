// // todo
// select all the drum elements and add event listener
// add animation when a button is clicked
// play music

var audio_volume = 0.6;

const animate = (key) => {
  const currentKey = document.querySelector(`.${key}`);
  currentKey.classList.add('pressed');
  setTimeout(() => {
    currentKey.classList.remove("pressed");
  }, 250);
}

const playMusic = (path) => {
  const audio = new Audio(path);
  audio.volume = audio_volume;
  audio.play();
}

document.addEventListener("keypress", (event) => {
  const triggeredKey = event.key;
  makeSound(triggeredKey);
  animate(triggeredKey);
})

// theme 1

const theme_1_background = "#091921";
const theme_1_text = "#00fff1";


// theme 2
const theme_2_background = "#f7c340";
const theme_2_text = "#2d2d2d";

const change_theme = (theme) => {
  let root = document.documentElement;
  if (theme === "theme_1") {
    root.style.setProperty("--background", theme_1_background);
    root.style.setProperty("--text", theme_1_text);

  }
  else {
    root.style.setProperty("--background", theme_2_background);
    root.style.setProperty("--text", theme_2_text);
  }

}


var current_theme = "theme_1";

const theme_changer = document.getElementById("util_button_theme");
theme_changer.addEventListener("click", (e) => {
  theme_changer.classList.add("change_theme_pressed");
  setTimeout(() => {
    theme.classList.remove("change_theme_pressed");
  }, 200);
  if (current_theme == "theme_1") {
    change_theme("theme_2");
    current_theme = "theme_2";
  }
  else {
    change_theme("theme_1");
    current_theme = "theme_1";
  }
});



var auto_music_id;
var auto_music_on = false;
const start_auto_music = () => {
  const letters = ["w", "a", "s", "d", "j", "k", "l"];

  auto_music_id = setInterval(() => {
    const current_key = letters[Math.floor(Math.random() * letters.length)];
    makeSound(current_key);
    animate(current_key);
  }, 200);

}

const auto_music_button = document.getElementById("util_button_auto");
auto_music_button.addEventListener("click", () => {
  if (auto_music_on) {
    clearInterval(auto_music_id);
    auto_music_on = false;
    auto_music_button.innerText = "Start Auto Music";
    auto_music_button.classList.remove("auto_music_on");
  }
  else {
    start_auto_music();
    auto_music_on = true;
    auto_music_button.innerText = "Stop Auto Music";
    auto_music_button.classList.add("auto_music_on");
  }
})


const slider = document.getElementById("volume_slider");
slider.oninput = (event) => {
  audio_volume = event.target.value / 100;
}

const makeSound = (key) => {
  switch (key) {
    case "w": playMusic("sound/sound-1.mp3");
      break;
    case "a": playMusic("sound/sound-2.mp3");
      break;
    case "s": playMusic("sound/sound-3.mp3");
      break;
    case "d": playMusic("sound/sound-4.mp3");
      break;
    case "j": playMusic("sound/sound-5.mp3");
      break;
    case "k": playMusic("sound/sound-6.mp3");
      break;
    case "l": playMusic("sound/sound-7.mp3");
      break;
    default: console.log("Hey!! Wrong Button");
  }
}

const handleDrumClick = (event) => {
  // console.log(event);
  let innerHTML = event.target.innerHTML;
  console.log(innerHTML);
  animate(innerHTML);
  makeSound(innerHTML);
}

var drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleDrumClick);
}