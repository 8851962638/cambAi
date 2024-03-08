// script.js

// Get references to HTML elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const volumeSlider = document.getElementById('volume-slider');
const seekSlider = document.getElementById('seek-slider');

// Set initial values
audioPlayer.volume = 1; // Set initial volume to maximum

// Function to play audio
function playAudio() {
    audioPlayer.play();
}

// Function to pause audio
function pauseAudio() {
    audioPlayer.pause();
}

// Function to stop audio
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

// Function to adjust volume
function adjustVolume() {
    audioPlayer.volume = volumeSlider.value;
}

// Function to seek audio
function seekAudio() {
    const seekTo = audioPlayer.duration * (seekSlider.value / 100);
    audioPlayer.currentTime = seekTo;
}

// Event listeners for buttons and sliders
playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);
volumeSlider.addEventListener('input', adjustVolume);
seekSlider.addEventListener('input', seekAudio);

// Update seek slider position as audio plays
audioPlayer.addEventListener('timeupdate', () => {
    const newPosition = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekSlider.value = newPosition;
});

// Update seek slider max value when audio metadata is loaded
audioPlayer.addEventListener('loadedmetadata', () => {
    seekSlider.max = audioPlayer.duration;
});

// Log errors to the console
audioPlayer.addEventListener('error', (event) => {
    console.error('Audio error:', event);
});
