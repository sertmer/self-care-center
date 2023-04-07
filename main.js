//DataModel
var affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
]

var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
]

//Variables
var receiveMessageButton = document.querySelector('button')
var mantraInput = document.querySelector('#mantra')
var affirmationInput = document.querySelector('#affirmation')
var paragraph = document.querySelector('p')      
var meditateImage = document.querySelector('.meditate-img')    
var messagedecisioncontainer = document.querySelector('.message-decision-container')
var header = document.querySelector('header')
var displayMessageContainter = document.querySelector('.display-message')
//EVENTLISTENERS
receiveMessageButton.addEventListener('click', showMessage)
window.addEventListener('load', displayLoginForm)

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showMessage(event) {
  event.preventDefault()
  if (mantraInput.value === "mantra"){
    displayMessage(mantras)
  } else if (affirmationInput.value === "affirmation"){
    displayMessage(affirmations)
  }
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function displayMessage(array) {
  hide(meditateImage)
  show(paragraph)
  paragraph.innerText = decideMessage(array)
}

function decideMessage(array){
  return array[getRandomIndex(array)]
}

function displayLoginForm(){
  
  hide(messagedecisioncontainer)
  hide(header)
  hide(displayMessageContainter)
}