const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger .addEventListener('click', ()=>{
    navbar.classList.toggle('slide');
});

//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Tri Sparkers', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "Sorry I'm confused"; //the default message

  if (lastUserMessage === 'Hi' || lastUserMessage =='Hello') {
    const hi = ['Hi','Howdy','Hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
  if (lastUserMessage === 'How are you') {
    botMessage = 'I am Fine How are you';
  }
  if (lastUserMessage === 'I am fine') {
    botMessage = 'great';
}
  if (lastUserMessage === 'Number') {
    botMessage = '9876543210';
  }
  if (lastUserMessage === 'Menu card') {
    botMessage = 'we provide all types of food';
  }
  if (lastUserMessage === 'How to order food') {
    botMessage = 'you can order food via our mobile number or using our mail id';
}
if (lastUserMessage === 'Mail id') {
    botMessage = 'customercare@catering.com';
}
if (lastUserMessage === 'Location') {
    botMessage = 'Near tirupur bus stop';
}
if (lastUserMessage === 'Rating') {
    botMessage = '4.9';
}
if (lastUserMessage === 'How much it would cost') {
    botMessage = 'Please contact our customer care for more details';
}
if (lastUserMessage === 'thankyou') {
    botMessage = 'you are welcome';
}
if (lastUserMessage === 'bye') {
    botMessage = 'bye, see you soon';
}
if (lastUserMessage === 'best food') {
    botMessage = 'dosa';
}
if (lastUserMessage === 'Name') {
  botMessage = 'My name is ' + botName;
}
if (lastUserMessage === 'Best food') {
  botMessage = 'Dosa';
}
if (lastUserMessage === 'Bye') {
  botMessage = 'Bye,See you soon...!';
}
if (lastUserMessage === 'Thank you') {
  botMessage = 'Your Welcome';
}
if (lastUserMessage === 'hi') {
  botMessage = 'hi';
}
if (lastUserMessage === 'HI') {
  botMessage = 'HI';
}
if (lastUserMessage === 'Hello') {
  botMessage = 'Hello';
}
if (lastUserMessage === 'hello') {
  botMessage = 'hello';
}
if (lastUserMessage === 'We need biryani for 100 persons') {
  botMessage = 'OK,Your order has confirmed and the cost is 2000 rupees can you please say your delivery location';
}
if (lastUserMessage === 'We need briyani for 100 persons') {
  botMessage = 'OK,Your order has confirmed and the cost is 2000 rupees can you please say your delivery location';
}
if (lastUserMessage === '6/196B near coimbatore bus stop-641401') {
  botMessage = 'Ok, Your delivery location has been updated and Please do your payment by typing Payment';
}
if (lastUserMessage === 'Payment') {
  botMessage = 'bjagadeeswaran@fbl';
}    
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
