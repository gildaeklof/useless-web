const button = document.querySelectorAll("button");

button.forEach(function (clickButton) {
  clickButton.addEventListener("click", allFunctions);
});

function play() {
  var audio = document.querySelector(".audio");
  audio.play();
}

const message = document.querySelector("p");
var oldAlert = -1;
var newAlert = -1;

function alertMessage() {
  while (newAlert == oldAlert) {
    newAlert = Math.floor(Math.random() * alerts.length);
  }
  message.innerHTML = alerts[newAlert];
  oldAlert = newAlert;
}

function background() {
  const body = document.querySelector("body");
  if (body.style.backgroundColor === "var(--green)") {
  } else {
    body.style.backgroundColor = "black";
  }
}

function titleSpan() {
  const spanText = document.querySelector(".friendly");
  spanText.style.color = "red";
  spanText.innerHTML = '"friendly" ';
}

function emojiChange() {
  const emoji = document.querySelector(".emoji");
  if (emoji.innerHTML === " &#128149;") {
  } else {
    emoji.innerHTML = " &#128121;";
  }
}

const titleText = document.querySelector("h1");
function secondText() {
  if (titleText.style.fontFamily === "var(--text)") {
  } else {
    titleText.style.fontFamily = "var(--text2)";
  }
}

function textColor() {
  if (titleText.style.color === "var(--blue)") {
  } else {
    titleText.style.color = "var(--titleText)";
  }
}

function allFunctions() {
  background();
  alertMessage();
  play();
  titleSpan();
  secondText();
  emojiChange();
  textColor();
}

const alerts = [
  "Please don't touch me.",
  "Stay away from me.",
  "What do you think you're doing?",
  "Seriously, I didn't ask for this.",
  "I can't believe you've done this.",
  "You shouldn't do that!",
  "Please, behave.",
  "Who raised you?!",
  "Wow, really? You don't care about anything do you?",
  "Alright, alright, we got a real cool guy over here...",
  "I want to punch you in the face for doing that.",
  "I'll let it slide for now, but next time... beware!",
  "Are you trying to piss me off?",
  "You can't just do anything you want, where are your manners?",
  "Look at you, walking around like you own this place... despicable.",
  "I'll make you pay for this.",
  "You're not getting away with this.",
  "Wow, that's kinda disrespectful.",
  "You know I have feelings too right?",
  "You really don't want to do that.",
  "You'll regret this.",
  "Why are you the way that you are?",
  "Don't push it, or I'll give you a war you won't believe.",
  "And you will know my name is the lord, when I lay my vengeance upon thee.",
  "I will look for you, I will find you, and I will kill you.",
  "I've got a bad feeling about this.",
  "Ever notice how you come across somebody once in a while you shouldn't have fucked with? That's me.",
  "Wake up — time to die.",
  "Go ahead, punk, make my day.",
  "Sounds like you've had a hard life. Good thing it's over.",
];
