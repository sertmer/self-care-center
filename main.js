var affirmationButton = document.querySelector('#affirmation-button')
var mantraButton = document.querySelector('#mantra-button')
var messageButton = document.querySelector('button')
var meditationImage = document.querySelector('svg')
var message = document.querySelector('h3')
var viewAllButton = document.querySelector('.view-all')
var homeView = document.querySelector('.home-view')
var messageView = document.querySelector('.all-messages')
var allMantras = document.querySelector('h4')
var allAffirmations = document.querySelector('h5')
var newMantraButton = document.querySelector('.create-new-mantra-button')
var newAffirmationButton = document.querySelector('.create-new-affirmation-button')
var newMantra = document.querySelector(`#user-mantra`)
var newAffirmation = document.querySelector(`#user-affirmation`)
var editButton = document.querySelector('.edit')

messageButton.addEventListener('click', showResult)
viewAllButton.addEventListener('click', showAllMessages)
newAffirmationButton.addEventListener('click', addAffirmation)
newMantraButton.addEventListener('click', addMantra)
editButton.addEventListener('click', editValues)

var mantras = ['I am the sky, the rest is weather', ' Onward and upward', ' The only constant is change', ' Yesterday is not today', ' This too shall pass', ' Breathing in, I send myself love', ' Breathing out, I send love to someone else who needs it', ' Don’t let yesterday take up too much of today', ' Every day is a second chance', ' Tell the truth and love everyone', ' I am free from sadness', ' I am enough', ' In the beginning it is you, in the middle it is you and in the end it is you', ' I love myself', ' I am present now', ' Inhale the future, exhale the past' ]
var affirmations = [' I forgive myself and set myself free', ' I believe I can be all that I want to be', ' I am in the process of becoming the best version of myself', ' I have the freedom & power to create the life I desire', ' I choose to be kind to myself and love myself unconditionally', ' My possibilities are endless', ' I am worthy of my dreams', ' I am enough', ' I deserve to be healthy and feel good', 'I  am full of energy and vitality and my mind is calm and peaceful', ' Every day I am getting healthier and stronger', ' I honor my body by trusting the signals that it sends me', ' I manifest perfect health by making smart choices']

function getRandomMantra(mantras){
    randomIndex = Math.floor(Math.random() * mantras.length)
    var randomMantra = mantras[randomIndex] 
    return randomMantra  
}

function getRandomAffirmation(affirmations){
    randomIndex = Math.floor(Math.random() * affirmations.length)
    var randomAffirmation = affirmations[randomIndex] 
    return randomAffirmation
}


function showResult(){
    var randomAffirmation = getRandomAffirmation(affirmations);
    var randomMantra = getRandomMantra(mantras);
    if(affirmationButton.checked){
        setMessage(randomAffirmation);
    } 
    else if(mantraButton.checked){
        setMessage(randomMantra);
    }
}

function setMessage(text) {
    message.innerHTML = '';
    message.innerText = text;
}

function showAllMessages(){
    setViewAllMessages();
    allMantras.innerText = `mantras: ${mantras}`
    allAffirmations.innerText = `affirmations: ${affirmations}`   
}

function setViewHome() {
    homeView.classList.remove('hidden');
    messageView.classList.add('hidden')
}

function setViewAllMessages() {
    homeView.classList.add('hidden');
    messageView.classList.remove('hidden')
}

function saveAffirmations(affirmation) {
    affirmations.push(affirmation);
}

function addAffirmation() {
    setMessage(newAffirmation.value);
    saveAffirmations(newAffirmation.value);
    setViewHome();
}

function saveMantras(mantra){
    mantras.push(mantra)
}

function addMantra(){
    setMessage(newMantra.value);
    saveMantras(newMantra.value);
    setViewHome();
}

function editValues(){
    
}