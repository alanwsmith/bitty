// START: YouTube API Loading
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youTubePlayer", {
    height: "390",
    width: "640",
    videoId: "8bOtuoNFzB0",
    playerVars: {
      "playsinline": 1,
    },
  });
}

function stopVideo() {
  player.stopVideo();
}
// END: YouTube API Loading

const youTubeTemplates = {
  playPauseButton: `<button data-use="playYouTube">Play</button>`,
};

window.YouTubeControls = class {
  addControls(_, el) {
    const playButton = this.api.makeElement(youTubeTemplates.playPauseButton);
    el.appendChild(playButton);
  }

  playYouTube(_ev, el) {
    if (player.getPlayerState() === 1) {
      el.innerHTML = "Play";
      player.pauseVideo();
    } else {
      el.innerHTML = "Pause";
      player.playVideo();
    }
  }
};
