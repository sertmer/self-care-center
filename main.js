
var messageButton = document.querySelector('.message-button');
var outputLocation = document.querySelector('.output-box')
messageButton.addEventListener('click', messageDisplay);


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function messageDisplay() {
    outputLocation.innerHTML = null;

    var typeDisplayed = document.querySelector('input[name="radio-message"]:checked').value;
    if (typeDisplayed === 'affirmations') {
        affirmationOutput = `${affirmations[getRandomIndex(affirmations)]}`;
        outputLocation.innerHTML = affirmationOutput;
    }
    else {

        var mantraOutput = `${mantras[getRandomIndex(mantras)]}`;
        outputLocation.innerHTML = mantraOutput;
    }

}