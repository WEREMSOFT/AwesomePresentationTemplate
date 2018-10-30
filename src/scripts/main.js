window.onYouTubeIframeAPIReady = function() {
    console.log('Player Ready!!');

    var loadYouTubeVideoID = 'JNFX32Hz_N0';
    var player;
    player = new YT.Player('YouTubeBackgroundVideoPlayer', {
        videoId: loadYouTubeVideoID, // YouTube Video ID
        width: 1280,               // Player width (in px)
        height: 720,              // Player height (in px)
        playerVars: {
          playlist: loadYouTubeVideoID,
            autoplay: 1,        // Auto-play the video on load
            autohide: 1,
            disablekb: 1, 
            controls: 0,        // Hide pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 0,              // Hide the full screen button
            autohide: 0,         // Hide video controls when playing
            rel: 0,
            enablejsapi: 1
        },
        events: {
          onReady: function(e) {
              e.target.mute();
              e.target.setPlaybackQuality('hd1080');
          },
          onStateChange: function(e) {
            if(e && e.data === 1){
                var videoHolder = document.getElementById('home-banner-box');
                if(videoHolder && videoHolder.id){
                  videoHolder.classList.remove('loading');
                }
            }else if(e && e.data === 0){
              e.target.playVideo()
            }
          }
        }
    });
  }

var video = document.querySelector("#videoElement");


if (navigator.mediaDevices.getUserMedia) {       
	navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(err) {
    console.log("Something went wrong!", err);
  });
}