var favMessageArray = [];
var favMessageButton = document.querySelector('.favorite-button');
var messageButton = document.querySelector('.message-button');
var outputLocation = document.querySelector('.output-box');
var showButton = document.querySelector('.show-button');
var homeButton = document.querySelector('.home-button');
var messageOutput;
var storedArray;
favMessageButton.addEventListener('click', favThisMessage);

messageButton.addEventListener('click', messageDisplay);
showButton.addEventListener('click', showFavs)
homeButton.addEventListener('click', returnHome)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function messageDisplay() {
    // outputLocation.innerHTML = null;
    if (!document.querySelector('input[name="radio-message"]:checked')) {
        outputLocation.innerText = "Please select the kind of message you'd like to read!";
        return 'invalid';
    }

    var typeDisplayed = document.querySelector('input[name="radio-message"]:checked').value;
    if (!typeDisplayed) {
        outputLocation.innerText = "Please select the kind of message you'd like to read!";
    }
    else if (typeDisplayed === 'affirmations') {
        messageOutput = `${affirmations[getRandomIndex(affirmations)]}`;
        outputLocation.innerText = messageOutput;
    }
    else {

        messageOutput = `${mantras[getRandomIndex(mantras)]}`;
        outputLocation.innerText = messageOutput;
    }
}

function favThisMessage() {
    if (!messageOutput) {
        console.log("messageOutput isn't defined");
    }
    else {

        favMessageArray.push(messageOutput);
        console.log(favMessageArray);
        if (typeof (Storage)) {
            if (sessionStorage.favArray) {
                storedArray = JSON.parse(sessionStorage.getItem('favArray'));
                storedArray.push(messageOutput);
                sessionStorage.setItem('favArray', JSON.stringify(storedArray));
            } else {
                storedArray = [];
                storedArray.push(messageOutput);
                sessionStorage.setItem('favArray', JSON.stringify(storedArray));
            }
            console.log(sessionStorage.favArray);
        }
    }
}

function showFavs() {


    if (typeof (Storage)) {
        if (sessionStorage.favArray) {
            storedArray = JSON.parse(sessionStorage.getItem('favArray'));
            outputLocation.innerHTML = null;
            for (i = 0; i < storedArray.length; i++) {
                outputLocation.innerHTML += `${storedArray[i]} <br>`;
            }
        }
    }
}

function returnHome()
{
return "hey";
}

function sessionStorageTest() {
    if (typeof (Storage)) {
        if (sessionStorage.countClick) {
            sessionStorage.countClick += 1;

        } else {
            sessionStorage.countClick = 1;
        }
        console.log(sessionStorage.countClick.length);
    }
}