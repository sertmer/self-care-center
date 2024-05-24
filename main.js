var favMessageArray = [];
var favMessageButton = document.querySelector('.favorite-button');
var messageButton = document.querySelector('.message-button');
var outputLocation = document.querySelector('.output-box');
var showButton = document.querySelector('.show-button');
var homeButton = document.querySelector('.home-button');
var homePage = document.querySelector('.main-page-view');
var favPage = document.querySelector('.fav-page-view');
var favOutput = document.querySelector('.fav-show-area');
var unfavoriteEventArray = [];
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
            favOutput.innerHTML = null;
            for (i = 0; i < storedArray.length; i++) {
                favOutput.innerHTML += `${storedArray[i]} <br> <button class="button un-favorite-button" id='unfavorite-${i}'> Unfavorite </button>  <br> <br>`;
            }
            for (i = 0; i < storedArray.length; i++) {
                unfavoriteEventArray[i] = document.querySelector(`#unfavorite-${i}`);
                unfavoriteEventArray[i].indexValue = i;
                unfavoriteEventArray[i].addEventListener('click', unFavorite);

            }
        }
    }

    showButton.classList.add('hidden');
    homePage.classList.add('hidden');
    favPage.classList.remove('hidden');
    homeButton.classList.remove('hidden');

}

function returnHome() {

    showButton.classList.remove('hidden');
    homePage.classList.remove('hidden');
    favPage.classList.add('hidden');
    homeButton.classList.add('hidden');

    return "hey";
}

function unFavorite() {
    var indexToUse = this.indexValue;
    if (typeof (Storage)) {
        if (sessionStorage.favArray) {
            storedArray = JSON.parse(sessionStorage.getItem('favArray'));
            console.log(indexToUse);
            storedArray.splice(indexToUse, 1);
            sessionStorage.setItem('favArray', JSON.stringify(storedArray));
            showFavs();
        }
    }
    console.log(this.id)
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