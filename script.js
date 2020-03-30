//Get DOM elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause video
function togleVideoStatus() {
  //Using the video HTML5 API methods to implement the logic
  //If the video is paused than do the code block
  if (video.paused) {
    //If the video is paused than on click play
    video.play();
  } else {
    //If video playing than on click pause
    video.pause();
  }
}
//update pay/pause icon
function updatePlayIcon() {
  if (video.paused) {
    //On clikc of icon of play buton if its paused than change html to pause icon
    play.innerHTML = '<i class="fa fa-play fa-2x">';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x">';
  }
}
//Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  //Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}

//Set video time to progress
function setVideoProgress() {
  video.currentTime = +(progress.value * video.duration) / 100;
}
//Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event listeners
video.addEventListener("click", togleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("click", togleVideoStatus);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", togleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
