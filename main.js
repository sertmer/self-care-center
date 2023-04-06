//Data Model + Variables
var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather"];

var affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

//Query Selectors
var generateMessageButton = document.addQuerySelector('#generate-new-message-button');
var affirmationCheckbox = document.addQuerySelector('#affirmation');
var affirmationCheckbox = document.addQuerySelector('#mantra');

//Event Listeners
generateMessageButton.addEventListener('click', generateMessage)

//Functions
function generateMessage(){
    //if statment
    //first conditional will be if affirmations is checked (affirmationCheckbox.checked)

}

//event listener for the "submit" (aka button click on recieve messae button) then invokes function that uses the variable that stores the value of the selection to use an if else statement to either display a mantra or a affirmation