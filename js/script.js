function moveNoButton() {
    var noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded!');
});

function playOnPageLoad() {
    let audioElement = document.getElementById('audioFirst');
    audioElement.play();
}

function playAudio(audioId) {
    var audioElement = document.getElementById(audioId);

    // Pause all other audio elements
    var allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach(function (element) {
        if (element.id !== audioId) {
            element.pause();
        }
    });

    // Play the selected audio
    audioElement.play();
}

function sheSaidYes() {
    var yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', playAudio('audioWhenClickYes'));
    
    // Remove no button
    var noButton = document.getElementById('noButton');
    noButton.style.display = 'none';

    // Remove the question container
    var questionContainer = document.getElementById('questionContainer');
    if (questionContainer) {
        questionContainer.style.display = 'none';
    }

    setBodyBackgroundImage('/image/ily.png');
    var lovePage = document.getElementById('love');
    lovePage.style.display = 'block';
}

function sheSaidNo() {
        var noButton = document.getElementById('noButton');
        noButton.addEventListener('click', playAudio('audioWhenClickNo'));
        moveNoButton()
}

function nextToQuestion() {
    var firstPage = document.getElementById('questionContainer0');
    firstPage.style.display = 'none';
    setBodyBackgroundImage('/image/backgroundCouple.jpg');
    document.body.style.backgroundImage = "url";
    var secondPage = document.getElementById('questionContainer');
    secondPage.style.display = 'block';
    playOnPageLoad();
}

function love() {
    var lovePage = document.getElementById('love');
    lovePage.style.display = 'none';
    setBodyBackgroundImage('/image/love.JPEG');
    setTimeout(() => {
        document.body.style.opacity = '1';  // Fade-in
    }, 100);  // Delay for smoother transition
}

// Function to set background image for the body
function setBodyBackgroundImage(imagePath) {
    document.body.style.backgroundImage = `url("${imagePath}")`;
}
