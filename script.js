document.addEventListener('DOMContentLoaded', () => {
    let video = document.getElementById('video');
    let playButton = document.getElementById('togglePlay');
    let rewindButton = document.getElementById('rewind');
    let fastForwardButton = document.getElementById('fastForward');
    let progressBar = document.getElementById('progressBar');
    let progressFilled = document.getElementById('progressFilled');
    let volumeControl = document.getElementById('volume');
    let playbackSpeedControl = document.getElementById('playbackSpeed');
    let speedLabel = document.getElementById('speedLabel');

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.textContent = '❚ ❚';
        } else {
            video.pause();
            playButton.textContent = '►';
        }
    });

    rewindButton.addEventListener('click', () => {
        video.currentTime -= 10;
    });

    fastForwardButton.addEventListener('click', () => {
        video.currentTime += 25;
    });

    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.value = percent;
        progressFilled.style.width = `${percent}%`;
    });

    playbackSpeedControl.addEventListener('input', () => {
        video.playbackRate = playbackSpeedControl.value;
        speedLabel.textContent = `${playbackSpeedControl.value}×`;
    });
});