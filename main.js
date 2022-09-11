var affirmations = ["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."]

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
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
"I am the sky, the rest is weather."]

var affirmationButton = document.getElementById("affirmation")
var mantraButton = document.getElementById("mantra")
var receiveMessageButton = document.querySelector(".submit-button")
var imageContainer = document.querySelector(".image-container")
var deleteMessageButton = document.querySelector(".delete")

function randomNumber(type) {
  if(type === affirmations) {
    return Math.floor(Math.random() * affirmations.length)
  } else {
    return Math.floor(Math.random() * mantras.length)
  }
}

receiveMessageButton.addEventListener("click", generateRandomMessage)
deleteMessageButton.addEventListener("click", function() {
  deleteMessage(imageContainer.innerText)
  imageContainer.innerText = "This message has been removed!"
})

function generateRandomMessage() {
  if(affirmationButton.checked === true) {
    imageContainer.innerHTML = affirmations[randomNumber(affirmations)]
    deleteMessageButton.classList.remove("hidden")
  } else if(mantraButton.checked === true) {
    imageContainer.innerHTML = mantras[randomNumber(mantras)]
    deleteMessageButton.classList.remove("hidden")
  }
}


function deleteMessage(message) {
  if(mantras.includes(message)) {
    mantras.splice(mantras.indexOf(message), 1)
  } else {
    affirmations.splice(affirmations.indexOf(message), 1)
  }
}
