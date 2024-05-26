//Iteration 0- To do: separate the radio buttons.
//Iteration 'Choose your own adventure'- Add a delete feature
//Other- Complete the read-me file, deploy

//Iteration 1

//Restate the goal: 
//When a user selects a message option and then clicks the "receive Message" button, the user sees a random message from the list of possible messages for that category.
//When the message appears, the meditation icon dissapears from the message area.

//Consider the data: 
//Ask clarifying questions:
//How many functions do I need to build?
//Will I need to add anything to HTML in order to make my code work?

//Psuedocode:
//Research what you don't know:
//Steps:

//2. add querySelector for variables
//3. add eventListeners for buttons
//4. create a function to generate a random message


//Start coding by rerefrencing the psuedocode you've written:

//Refactor/clean up:

var affirmation = [
    
    'I am confident.',
    'I am strong.',
    'I am getting better and better every day.',
    'All I need is within me right now.',
    'I am an unstoppable force of nature.',
    'I am a living, breathing example of motivation.',
    'I am living with abundance.',
    'I am having a positive and inspiring impact on the people I come into contact with.',
    'I am rising above the thoughts that are trying to make me angry or afraid.',
    'I am filled with focus.',
    'I am not pushed by my problems; I am led by my dreams.',
    'I am grateful for everything I have in my life.',
    'I am independent and self-sufficient.',
    'I can be whatever I want to be.',
    'I am not defined my by past; I am driven by my future.',
    'I use obstacles to motivate me to learn and grow.',
    'I am intelligent and focused.',
    'I feel more grateful each day.',
    'I am getting healthier every day.',
    'Each and every day, I am getting closer to achieving my goals.',
    'I am constantly growing and evolving into a better person.',
    'I accept myself for who I am and create peace, power and confidence of mind and of heart.',
    'I am going to forgive myself and free myself. I deserve to forgive and be forgiven.',
    'I am healing and strengthening every day.',
    "I have made it through hard times before, and I have come out stronger and better because of them.",
    'I must remember the incredible power I possess within me to achieve anything I desire.',
    "I do not compare myself to others. The only person I compare myself to is the person I was yesterday.",
    'Note to self: I am going to make you so proud.',
    'I finish what matters and let go of what does not.',
    'I feed my spirit. I train my body. I focus my mind. This is my time.',
    'My life has meaning. What I do has meaning. My actions are meaningful and inspiring.',
    'What I have done today was the best I was able to do today. And for that, I am thankful.',
    'Today I choose to be happy.'
];

var mantra = [
    'Sometimes you win, sometimes you learn.',
    'Mistakes are opportunitites to grow.',
    'Practice makes progress.',
    'Where theres a will, theres a way.',
    'Be the change you want to see.',
    'Big ideas start small.',
    'Everything is difficult before it gets easy.',
    'The expert in anything was once a beginnner.',
    'If you learn to love challenges, you will always be growing.',
    'Attitude is everything.',
    'Put on your positive pants.',
    'Inhale the good, exhale the crazy.',
    'If cauliflower can become pizza, I can do anyting.',
    'Let that shit go.',
    'Life is a journey, wear comfy shoes.',
    'A day without sunshine is like, you know, night.',
    'If opportunity doesnt knock, build a door.',
    'If life gives you melons, you might be dyslexic.',
    'When something goes wrong in your life, just yell "plot twist" and move on.',
    'Just remember that you are unique--just like everybody else',
    'What if the "Hokey Pokey" really IS what its all about.',
    'Be an optimist who carries a rain coat.',
];

// var affirmations =  document.querySelector('.affirmation-button');
// var mantras =  document.querySelector('.mantra-button');
// var displayMessageContainer = document.querySelector('.display-message-container');
// var inputBox = document.querySelector('.input-box'); 
// var affirmationButton = document.querySelector('.affirmation-button');
// var mantraButton = document.querySelector('.mantra-button');
// var meditationImg = document.querySelector('meditation-img');
// var mantraButtonChecked = document.querySelector('mantra');

// var affirmationButtonChecked = document.querySelector('affirmation').checked;
// var receiveMessageButton = document.querySelector('.receive-message-button').checked;


// affirmationButton = document.addEventListener("click", showRandomMessage);
// mantraButton = document.addEventListener("click", showRandomMessage);
// meditationImg = document.addEventListener("click", showRandomMessage);
// receiveMessageButton = document.addEventListener("click", showRandomMessage);

// displayMessageContainer.addEventListener("click", showRandomMessage);


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}




