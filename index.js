
const BOARD = document.getElementById('board')
const BOARD_HEIGHT = 600
const BOARD_WIDTH = 600
const LEFT_ARROW = 37
const RIGHT_ARROW = 39
const START = document.getElementById('start')
const SNAKE = document.getElementById('snake')
const FOODS = []
var points = 0

var gameInterval = null

function createFood(x){
  const food = document.createElement('div')
  food.className = 'food'
  food.style.left = `${x}px`
  var top = food.style.top = 0

  $('#board').append(food)

  function moveFood(){
    food.style.top = `${top += 5}px`
    if (top < BOARD_HEIGHT) {
      window.requestAnimationFrame(moveFood)
    } else {
      food.remove()
    }
  }

  window.requestAnimationFrame(moveFood)

  FOODS.push(food)

  return food
}


function catchFood() {
  $('.food').remove()
  makeChubby()
  points += 1
  var displayPoints = document.getElementById("pointTally");
  displayPoints.innerHTML = `Snake Snack Points: ${points}`;
}

function makeChubby() {
    var el = document.getElementById("snake");
    var width = el.offsetWidth;
    var newWidth= width + 30;
    el.style.width = newWidth + 'px';
    var height = el.offsetHeight;
    var newHeight = height + 10;
    el.style.height = newHeight + 'px'
}

function start(){
  document.addEventListener('click', createFood)
  $('#start').remove()


  gameInterval = setInterval(function(){
    createFood(Math.floor(Math.random() * (BOARD_WIDTH - 20)))
  }, 2000)

  // var foodItem = document.querySelectorAll('.food')
  //
  // for (var i = 0; i < foodItem.length; i++) {
  //   foodItem[i].addEventListener('click', catchFood)
  // }
  document.addEventListener('click', catchFood)
}
