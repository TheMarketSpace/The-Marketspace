// set cookie changes the value of a cookie
// exdays sets how many days the cookie takes before expiring
// set cookie creates a cookie if it doesn't exist
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get cookie gets the value of a cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// check cookie checks if the user has a specific cookie at all
// if so, this returns the cookie value
// otherwise it returns the empty string ""
function checkCookie(cname) {
  var cookie = getCookie(cname);
  if (cookie != "") {
    // console.log("cookie " + cname + " loaded");
  }
  else {
    // console.log("cookie failed to load");
  }
  return cookie;
}

// repeatedly prompts user until they give an acceptable response
// a response is considered acceptable if it is in the acceptableResponse list
function repeatPrompt(promptText, acceptableResponses) {
  var response = promptCheck(promptText);
  while (!acceptableResponses.includes(response)) {
    alert("Invalid response: " + response);
    alert("Acceptable responses are: \n" + acceptableResponses);
    response = promptCheck(promptText);
  }
}

// repeatPrompt("Do you like pancakes? (yes/no)", ["yes", "no"])

// "sloppy workaround" - call load() after one second
// so that the webpage background fully loads before 
function loadWait() {
  setTimeout(load, 1000); // call load after 1000 milliseconds (1 second)
}

// step 1 - on page load (in load() function), check if they have a "wantPrompt" cookie
// step 2 - if they do not have a "wantPrompt" cookie, create one, and set its value to true
// step 3 - make the promptEnable and promptDisable functions set the wantPrompt cookie value to true or false respectively

// var answer = prompt("Do you like cookies?");
// alert("YOU LOST THE GAME");
// these are both popups

var wantPrompt;

function PromptEnable() {
  alert("Alerts Enabled");
  wantPrompt = true;
  setCookie('alert cookie', true, 365); 
}

function PromptDisable() {
  alert("Alerts Disabled");
  wantPrompt = false;
  setCookie('alert cookie', false, 365);
}

function announcment(message)
{
  alert(message);
}

function marketcoin(){
  var marketcoins = checkcookie("marketcoins");
  if (marketcoins == "") {
    marketcoins = 50000;
    setCookie("marketcoins", marketcoins, 365);      
    alert("Marketcoins = " + marketcoins);
    alert("You have 50,000 Market Coins!")
  }

  /*
  var username = checkCookie("username");
  if (username == "") {
    username = promptCheck("Please Enter Your Username: ");
    setCookie("username", username, 365);    
  }
  */
  
  
}

// called after window loads
function load() {   
  
  wantPrompt = checkCookie("alert cookie");
  if (wantPrompt == "") {
    setCookie("alert cookie", true, 365);
    wantPrompt = true;
  }
  else
  {
    wantPrompt = wantPrompt == "true"; // converts string to boolean
  }

  // alert("load called");

  // how to check / setup username cookie
  var username = checkCookie("username");
  if (username == "") {
    username = promptCheck("Please Enter Your Username: ");
    setCookie("username", username, 365);    
  }

  // else {
    //alertCheck("Welcome back " + username);
  //}

  var indname = checkCookie("industry name");
  if (indname == "") {
    indname = promptCheck("Please Enter Your Industry name: ");
    setCookie("industry name", indname, 365);
  }
  else {
    alertCheck("You have a industry named, " + indname);
  }

  

  var whoareyou = checkCookie("whoareyou?")
  if (whoareyou == "") {
    setCookie("whoareyou?", username, 365);
  }
  else
  {
    if (wantPrompt == true)
    {
      repeatPrompt("Are you " + whoareyou + "? Type your answer in all lower-case letters!", ["yes", "no"]);
    }
  }

}

function reportUsername() {
  setCookie("username", document.getElementById('usernameInput').value, 365);
  setCookie("whoareyou?", document.getElementById('usernameInput').value, 365);
}

function reportIndustry() {
  setCookie("industry name", document.getElementById('industryInput').value, 365)
}

//deleteAllCookies();

// window.onLoad = load();

// clears all cookies for THIS user
// taken from https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

// wrapper function ... it basically calls another function
// but has a little bit more
function alertCheck(message)
{
  if(wantPrompt)
  {
    alert(message);
  }
}

// wrapper function ... it basically calls another function
// but has a little bit more
function promptCheck(message)
{
  if(wantPrompt)
  {
    return prompt(message);
  }
}


promptCheck("NEW ON THE MARKETSPACE: \n")
promptCheck("NEW! game coming out in #CustomGames, \n")
promptCheck("NEW! videos being posted on #Videos!")
promptCheck("Hi!\n")