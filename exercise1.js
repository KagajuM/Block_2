
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

    for(var i = 0; i <foods.length; i++){
        var food = foods[i];
        var event = document.querySelector('template').content.cloneNode(true); 
        event.getElementById('img').src = food.img;
        event.getElementById('img').alt = food.text;
        event.getElementById('text').innerText = food.text;
        event.querySelector('.date').innerText = food.date;
        event.getElementById('close-button').addEventListener("click", deleteEvent);
        foodContainer.appendChild(event);
    }
    
    for(var i = 0; i <drinks.length; i++){
        var drink = drinks[i];
        var event = document.querySelector('template').content.cloneNode(true); 
        event.getElementById('img').src = drink.img;
        event.getElementById('img').alt = drink.text;
        event.getElementById('text').innerText = drink.text;
        event.querySelector('.date').innerText = drink.date;
        event.getElementById('close-button').addEventListener("click", deleteEvent);
        drinkContainer.appendChild(event);
    }

    for(var i = 0; i <desserts.length; i++){
        var dessert = desserts[i];
        var event = document.querySelector('template').content.cloneNode(true); 
        event.getElementById('img').src = dessert.img;
        event.getElementById('img').alt = dessert.text;
        event.getElementById('text').innerText = dessert.text;
        event.querySelector('.date').innerText = dessert.date;
        event.getElementById('close-button').addEventListener("click", deleteEvent);
        dessertContainer.appendChild(event);
    }
}

function deleteEvent() {
    var event = this.parentNode;
    var verticalContainer = event.parentNode;
    verticalContainer.removeChild(event);
}