
var mantras = ["I'm on a seafood diet. I see food and I eat it.",
    "Less Monday, more Friday.",
    "Coffee: because adulting is hard.",
    "Do more things that require pants.",
    "Don’t grow up, it’s a trap!",
    "Namaste in bed.",
    "Chocolate understands.",
    "Keep calm and pretend it's on the lesson plan.",
    "Wine flies when you're having fun.",
    "Running late is my cardio.",
    "Procrastinate now, don't put it off.",
    "Life is short. Smile while you still have teeth.",
    "Hakuna Moscato: it means drink wine.",
    "Too glam to give a damn.",
    "Don’t worry, beach happy.",
    "Alexa, skip to Friday.",
    "Adulting is soup and I am a fork.",
    "Sarcasm: because beating people is illegal.",
    "I’m not lazy, I’m on energy-saving mode.",
    "Be a pineapple: stand tall, wear a crown, and be sweet on the inside."];

var affirmations = ["I am a magnet for coffee and good vibes.",
    "I can resist anything except pizza.",
    "I am fluent in sarcasm.",
    "I am not lazy, I am on power-saving mode.",
    "I am a professional over-thinker.",
    "I put the ‘pro’ in procrastinate.",
    "I am a cupcake in a world of muffins.",
    "I don’t sweat, I sparkle.",
    "I am a limited edition.",
    "I am on a roll, literally... pass the butter.",
    "I am the queen/king of my couch.",
    "I am a rainbow sprinkle in a sea of plain donuts.",
    "I am fabulous and caffeinated.",
    "I am a walking nap enthusiast.",
    "I am mastering the art of relaxation.",
    "I am too blessed to be stressed... or dressed.",
    "I am a warrior in pajama pants.",
    "I am a genius in disguise (mostly a sleep disguise).",
    "I am 99% sure I am awesome.",
    "I am not a morning person, I am a coffee person."];


var receiveMessageButton = document.querySelector("#receive-msg-button");
var svgImage = document.querySelector(".svg-img");
var dynamicMessage = document.querySelector("#message");
var removeMessage = document.querySelector("#remove-msg");
var removeMessageContainer = document.querySelector(".remove-msg-container");

removeMessage.addEventListener("click", removeMessageClickHandler);
receiveMessageButton.addEventListener("click", receiveMessageButtonClickHandler);

function receiveMessageButtonClickHandler(event) {
    var checkedButton = document.querySelector("input[type='radio']:checked");
    var checkedValue = checkedButton.value;
    var arrayToChooseFrom = affirmations;
    var mantraOrAffirmation;

    svgImage.classList.add("hidden");
    removeMessageContainer.classList.remove("hidden");

    if (checkedValue === "affirmation-array") {
        arrayToChooseFrom = affirmations;
    } else if (checkedValue === "mantra-array") {
        arrayToChooseFrom = mantras;
    }

    var randomIndex = getRandomIndex(arrayToChooseFrom);
    var mantraOrAffirmation = arrayToChooseFrom[randomIndex];

    dynamicMessage.innerText = mantraOrAffirmation;
    dynamicMessage.classList.remove("hidden");

}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function removeMessageClickHandler(event) {

    var dynamicMessage = document.querySelector("#message");
    var messageToRemove = dynamicMessage.innerText;

    dynamicMessage.classList.add("hidden");
    svgImage.classList.remove("hidden");
    removeMessageContainer.classList.add("hidden");

    for (var i = 0; i < mantras.length; i++) {
        if (messageToRemove === mantras[i]) {
            mantras.splice(i, 1);
        }
    }

    for (var i = 0; i < affirmations.length; i++) {
        if (messageToRemove === affirmations[i]) {
            affirmations.splice(i, 1);
        }
    }
}

