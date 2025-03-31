document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".parallax-video .video");
  let currentVideoIndex = 0;

  // Hide all videos initially
  videos.forEach((video, index) => {
    video.style.display = "none";
  });

  function playNextVideo() {
    // Hide the previous video (if it exists)
    if (currentVideoIndex > 0) {
      const previousVideo = videos[currentVideoIndex - 1];
      previousVideo.style.display = "none"; // Hide the previous video
      previousVideo.pause(); // Pause the previous video
      previousVideo.currentTime = 0; // Reset the time of the previous video
    }

    // Show and play the current video
    const currentVideo = videos[currentVideoIndex];
    currentVideo.style.display = "block"; // Show the current video
    currentVideo.play(); // Play the current video

    // Move to the next video when the current one ends
    currentVideo.onended = function () {
      currentVideoIndex++;
      if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; // Loop back to the first video
      }
      playNextVideo(); // Play the next video
    };
  }

  // Start playing the first video
  playNextVideo();
});
