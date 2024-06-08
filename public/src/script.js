document.addEventListener("DOMContentLoaded", function() {
  const playBtn = document.getElementById("play-btn");
  const muteBtn = document.getElementById("mute-btn");
  const volumeSlider = document.querySelector(".volume-slider");
  const audioPlayer = document.getElementById("player");
  const progressBar = document.getElementById("progress-bar");

  if (playBtn && muteBtn && volumeSlider && audioPlayer && progressBar) {
    playBtn.addEventListener("click", function() {
      if (audioPlayer.paused) {
        play();
      } else {
        pause();
      }
    });

    muteBtn.addEventListener("click", function() {
      if (audioPlayer.muted) {
        unmute();
      } else {
        mute();
      }
    });

    volumeSlider.addEventListener("input", function() {
      setVolume(this.value);
    });

    audioPlayer.addEventListener("timeupdate", function() {
      updateProgressBar();
    });
  } else {
    console.error("One or more elements not found:", {
      playBtn,
      muteBtn,
      volumeSlider,
      audioPlayer,
      progressBar
    });
  }

  function play() {
    audioPlayer.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  }

  function pause() {
    audioPlayer.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }

  function mute() {
    audioPlayer.muted = true;
    muteBtn.classList.remove("fa-volume-up");
    muteBtn.classList.add("fa-volume-off");
  }

  function unmute() {
    audioPlayer.muted = false;
    muteBtn.classList.remove("fa-volume-off");
    muteBtn.classList.add("fa-volume-up");
  }

  function setVolume(volume) {
    audioPlayer.volume = volume;
  }

  function updateProgressBar() {
    const progress = audioPlayer.currentTime / audioPlayer.duration * 100;
    progressBar.style.width = progress + "%";
  }
});

function toggleAccordion(contentId) {
  const content = document.getElementById(contentId);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
