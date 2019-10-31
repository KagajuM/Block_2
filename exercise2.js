
var foods = [
    {'img': 'montaditos.jpg', 'text': 'Montaditos','date': '03/06/19 15:47'},
    {'img': 'poke.jpg', 'text': 'Poke', 'date': '03/06/19 15:47'},
    {'img': 'pasta.jpg', 'text': 'Pasta','date': '03/06/19 15:47'},
    {'img': 'pepperoni pizza.jpg', 'text': 'Pepperoni Pizza','date': '03/06/19 15:47'},
    {'img': 'cheese pizza.jpeg', 'text': 'Cheese Pizza','date': '03/06/19 15:47'},
  ];

var drinks = [
    {'img': 'tinto de verano.jpeg', 'text': 'Tinto de Verano','date': '03/06/19 15:47'},
    {'img': 'smoothie.jpg', 'text': 'Glowing Green Smoothie', 'date': '03/06/19 15:47'},
    {'img': 'oj.jpeg', 'text': 'Zumo de Naranja','date': '03/06/19 15:47'},
];

var desserts = [
    {'img': 'cheesecake.jpg', 'text': 'Tarta de Queso','date': '03/06/19 15:47'},
    {'img': 'croissant.jpeg', 'text': 'Croissant de Mantequilla', 'date': '03/06/19 15:47'},
    {'img': 'ice cream.jpeg', 'text': 'Ice Cream Sandwich','date': '03/06/19 15:47'},
    {'img': 'tiramisu.jpeg', 'text': 'Tarta de Tiramisu','date': '03/06/19 15:47'},
   
];

var interests = [
    'Italian', 'Fast Food', 'Traditional', 'Cheap', 'Spanish', 'Fancy'
];

// start off logged in
var isLoggedIn = true;

function load() {
    loadFoods();
    loadInterests();
    logout();
}

function loadFoods() {
    var foodContainer = document.getElementById('foods');
    var drinkContainer = document.getElementById('drinks');
    var dessertContainer = document.getElementById('desserts');
    var event;

    for(var i = 0; i <foods.length; i++){
        var food = foods[i];
        event = createEvent(food.img, food.text, food.date); 
        foodContainer.appendChild(event);
    }
    
    for(i = 0; i <drinks.length; i++){
        var drink = drinks[i];
        event = createEvent(drink.img, drink.text, drink.date);
        drinkContainer.appendChild(event);
    }

    for(i = 0; i <desserts.length; i++){
        var dessert = desserts[i];
        event = createEvent(dessert.img, dessert.text, dessert.date);
        dessertContainer.appendChild(event);
    }
}

function createEvent(img, text, date){
    var event = document.querySelector('template').content.cloneNode(true); 
    event.getElementById('img').src = img;
    event.getElementById('img').alt = text;
    event.getElementById('text').innerText = text;
    event.querySelector('.date').innerText = date;
    event.getElementById('close-button').addEventListener("click", deleteEvent);
    event.getElementById('like').addEventListener("click", likeEvent);
    event.getElementById('share').addEventListener("click", shareEvent);
    return event; 
}

function deleteEvent() {
    var event = this.parentNode;
    var verticalContainer = event.parentNode;
    verticalContainer.removeChild(event);
}

//Like & Unlike function 
function likeEvent(){
    if(this.style.color != "red"){
        this.style.color = "red";
    } else{
        this.style.color = "black";
    }
}

function shareEvent() {
    var popup = document.getElementById('share-popup');
    // console.log("parent node", this.parentNode.parentNode);
    var eventName = this.parentNode.parentNode.querySelector('#'+'text').innerHTML;
    popup.getElementsByTagName("h3")[0].innerHTML= "Share '" + eventName + "' ?";
    popup.style.visibility = "visible";
    console.log("Close button", popup.querySelector('#close'));
    popup.querySelector('#close').addEventListener("click", function(){
        popup.style.visibility = "hidden"; 
    });    
}

function showMenu(id){
    var container = document.getElementById(id);
    var dropdown = container.querySelector(".dropdown-content");
    if (dropdown.style.display == "block"){
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function archiveList(id){
    var container = document.getElementById(id);
    container.parentNode.removeChild(container);
}

function loadInterests() {
    var interestsContainer = document.getElementById("interests-container")
    for(var i = 0; i < interests.length; i++) {
        var interest = createInterest(interests[i]);
        interestsContainer.appendChild(interest);
    }
}

function createInterest(text) {
    var interest = document.createElement('div');
    interest.className = "interest"; // CHECK
    interest.textContent = text;
    interest.addEventListener("click", selectInterest);
    return interest; 
}

function selectInterest() {
    if(this.style.backgroundColor == "whitesmoke") {
       this.style.backgroundColor = "mediumslateblue";
    } else {
        this.style.backgroundColor = "whitesmoke";
    }
}

function clearFormInputs() {
    document.getElementById("firstname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("language").value = "";
}

function login() {
    var username = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;
    var account = getCookie(username);
    console.log("username: " + username + ", password: " + password + ", account: " + account);
    document.getElementById("username-login").value = "";
    document.getElementById("password-login").value = "";
    if(account == "") {
        window.alert("There is no account associated with that username.");
        return;
    }
    account = JSON.parse(account);
    if(account.password != password) {
        window.alert("Incorrect password.");
        return;
    }
    isLoggedIn = true;
    document.getElementById('profile-picture').src = 'lebron_profile_pic.jpg';
    showBodyContainer();
    document.getElementById('username').innerHTML = `${account.firstName} ${account.lastName}  (@${username}))`;
    window.alert(`Welcome back, ${account.firstName}!`);
    document.getElementById("logout").style.display = 'block';
    document.getElementById("login").style.display = 'none';
    document.getElementById("register").style.display = 'none';
}

function showLogin(){
    console.log("Trying to Login", document.body);
    var loginScreen = document.querySelector('.login-form');
    var registrationScreen = document.querySelector('.registration-form');
    var logoutScreen = document.querySelector('.logoutScreen');
    var bodyContainer = document.querySelector('.body-container');
    bodyContainer.style.display = 'none';
    logoutScreen.style.display = 'none';
    loginScreen.style.display = 'block';
    registrationScreen.style.display = 'none';
}

function showRegister(){
//    loadInterests();
    console.log("Creating Register Page", document.body);
    var registrationScreen = document.querySelector('.registration-form');
    var logoutScreen = document.querySelector('.logoutScreen');
    var loginScreen = document.querySelector('.login-form');
    var bodyContainer = document.querySelector('.body-container');
    bodyContainer.style.display = 'none';
    logoutScreen.style.display = 'none';
    loginScreen.style.display = 'none';
    registrationScreen.style.display = 'block';
}

function showBodyContainer(){
    console.log("Logged in", document.body);
    var loginScreen = document.querySelector('.login-form');
    var registrationScreen = document.querySelector('.registration-form');
    var logoutScreen = document.querySelector('.logoutScreen');
    var bodyContainer = document.querySelector('.body-container');
    bodyContainer.style.display = 'flex';
    logoutScreen.style.display = 'none';
    loginScreen.style.display = 'none';
    registrationScreen.style.display = 'none';
}

function logout(){
    console.log("Trying to Logout", document.body);
    var loginScreen = document.querySelector('.login-form');
    var registrationScreen = document.querySelector('.registration-form');
    var logoutScreen = document.querySelector('.logoutScreen');
    var bodyContainer = document.querySelector('.body-container');
    bodyContainer.style.display = 'none';
    logoutScreen.style.display = 'inline-grid';
    loginScreen.style.display = 'non';
    registrationScreen.style.display = 'none';
    
    isLoggedIn = false;
    document.getElementById('profile-picture').src = 'burger_icon.png';
    document.getElementById('username').innerHTML = "My Restaurant Review";
    document.getElementById("logout").style.display = 'none';
    document.getElementById("login").style.display = 'block';
    document.getElementById("register").style.display = 'block';
    
}

// email, firstName, lastName, language - String
// birthday - Date
// interests - List<String>
function createCookie() {
    var account = {};
    var username = document.getElementById("username-input").value;
    if(username == "") {
        window.alert("You must enter a username.");
        return;
    } else if(getCookie(username) != "") {
        window.alert("That username is already taken.");
        return;
    }
    account.email = document.getElementById("email").value;
    account.password = document.getElementById("password").value;
    if(account.password.length > 8 || account.password == "" || !/^[a-z0-9]+$/i.test(account.password)) {
        window.alert("You must enter a password with a maximum of 8 characters, where the allowed characters are letters [a-z] and digits [0-9]).");
        return;
    } 
    account.firstName = document.getElementById("firstname").value;
    if(account.firstName == "") {
        window.alert("You must enter your name.");
        return;
    }
    account.lastName = document.getElementById("lastname").value;
    if(account.lastName == "") {
        window.alert("You must enter your last name.");
        return;
    }
    account.birthday = document.getElementById("birthday").value;
    if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(account.birthday)) {
        window.alert("You must enter your date of birth in the proper format (dd/mm/yyyy).");
        return;
    }
    account.language = document.getElementById("language").value;
    account.purpose = document.getElementById("purpose").value;
    var interestsContainer = document.getElementById("interests-container").childNodes;
    
    account.interests = [];
    for(var i = 0; i < interestsContainer.length; i++) {
        interests.push(interestsContainer.item(i).textContent);
    }
    document.cookie = `${username}=${JSON.stringify(account)}`;
    window.alert(document.cookie);
    window.alert("You have successfully created your account!");
    clearFormInputs();
    showLogin();
}

// returns value of cookie, which consists of serialized account object
function getCookie(cname) {
    var name = cname + "=";
    var cookies = document.cookie.split("; ");
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var valueIndex = cookie.indexOf('=') + 1;
        var key = cookie.substring(0, valueIndex);
//        console.log(name + " " + key);
        if(name != key) continue;
        var value = "";
        // if statement below is to avoid index out of bounds when value is empty String
        if(valueIndex < cookie.length) value = cookie.substring(valueIndex);
        return value;
    }
    return "";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

//deleteAllCookies();