
var foods = [
    {'img': 'montaditos.jpg', 'text': 'Montaditos','date': '03/06/19 15:47'},
    {'img': 'poke.jpg', 'text': 'Poke', 'date': '03/06/19 15:47'},
    {'img': 'pasta.jpg', 'text': 'Pasta','date': '03/06/19 15:47'},
    {'img': 'pepperoni pizza.jpg', 'text': 'Pepperoni Pizza','date': '03/06/19 15:47'},
    {'img': 'cheese pizza.jpeg', 'text': 'Cheese Pizza','date': '03/06/19 15:47'},
  ];

function loadFoods() {
    console.log("Well shit happened");
    var foodContainer = document.getElementById('foods');

    for(var i = 0; i <foods.length; i++){
        var food = foods[i];
        var event = document.querySelector('template').content.cloneNode(true); 
        event.getElementById('img').src = food.img;
        event.getElementById('text').innerText = food.text;
        event.querySelector('.date').innerText = food.date;
        console.log("Logging event "+ i, event);
        foodContainer.appendChild(event);
    }
    
}

