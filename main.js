var affirmationBtn = document.getElementById('aff-btn');
var mantraBtn = document.getElementById('mantra-btn');
var receiveMsgBtn = document.getElementById('receive-msg-btn');
var selfCareImage = document.querySelector('.self-care-image');
var messageBox = document.querySelector('.display-message');
var deleteBtn = document.getElementById('delete-button');


var affirmations = [
  "I forgive myself and set myself free.",

  "I believe I can be all that I want to be.",

  "I am in the process of becoming the best version of myself.",

  "I have the freedom & power to create the life I desire.",

  "I choose to be kind to myself and love myself unconditionally.",

  "My possibilities are endless.",

  "I am worthy of my dreams.",

  "I am enough.",

  "I deserve to be healthy and feel good.",

  "I am full of energy and vitality and my mind is calm and peaceful.",

  "Every day I am getting healthier and stronger.",

  "I honor my body by trusting the signals that it sends me.",

  "I manifest perfect health by making smart choices."
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",

  "Don’t let yesterday take up too much of today.",

  "Every day is a second chance.",

  "Tell the truth and love everyone.",

  "I am free from sadness.",

  "I am enough.",

  "In the beginning it is you, in the middle it is you and in the end it is you.",

  "I love myself.",

  "I am present now.",

  "Inhale the future, exhale the past.",

  "This too shall pass.",

  "Yesterday is not today.",

  "The only constant is change.",

  "Onward and upward.",

  "I am the sky, the rest is weather."
];



window.addEventListener('load', displayWelcomePage);
receiveMsgBtn.addEventListener('click', displayMessage);
deleteBtn.addEventListener('click', function () {
  hideDeleteBtn()
  deleteMessage()
})

function hideDeleteBtn(){
  deleteBtn.classList.add('hidden');
}


function displayMessage() {
  if (mantraBtn.checked) {
    displayMantra()
  } else if (affirmationBtn.checked) {
    displayAffirmation()
  }
}

function displayWelcomePage(event) {
  event.preventDefault();
  hideDeleteBtn()
}

function deleteMessage() {
  if (mantraBtn.checked) {
    var randomMantra = mantras[getRandomIndex(mantras)];
    removeCurrentMantra(randomMantra);
    alert("Message Deleted");
    messageBox.classList.add('hidden');
    selfCareImage.classList.remove('hidden');
  } else if (affirmationBtn.checked) {
    var randomAffirmation = affirmations[getRandomIndex(affirmations)]
    removeCurrentAffirmation(randomAffirmation);
    deleteBtn.classList.add('hidden');
  }
}

function displayMantra(){
    var randomMantra = mantras[getRandomIndex(mantras)];
    selfCareImage.classList.add('hidden');
    messageBox.classList.remove('hidden');
    messageBox.innerText = `${randomMantra}`;
    deleteBtn.classList.remove('hidden');
  }

function displayAffirmation(){
    var randomAffirmation = affirmations[getRandomIndex(affirmations)];
    selfCareImage.classList.add('hidden');
    messageBox.classList.remove('hidden');
    messageBox.innerText = `${randomAffirmation}`;
    deleteBtn.classList.remove('hidden');
}

function removeCurrentAffirmation(randomAffirmation){
  console.log(randomAffirmation);
  for (var i =0; i < affirmations.length; i ++){
    if (affirmations[i] === randomAffirmation){
      affirmations.splice(i, 1);
    }
  }
}

function removeCurrentMantra(randomMantra){
  for (var i = 0; i <mantras.length; i ++){
    if( mantras[i] === randomMantra){
      mantras.splice(i, 1);
    }
  }
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
