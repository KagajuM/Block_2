
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