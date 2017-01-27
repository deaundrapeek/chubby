
const BOARD = document.getElementById('board')
const BOARD_HEIGHT = 600
const BOARD_WIDTH = 600
const LEFT_ARROW = 37
const RIGHT_ARROW = 39
const START = document.getElementById('start')

const FOODS = []

var gameInterval = null

function createFood(x){
  const food = document.createElement('div')
  food.className = 'food'
  food.style.left = `${x}px`
  var top = food.style.top = 0

  $('#board').append(food)

  function moveFood(){
    food.style.top = `${top += 2}px`

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

function start(){
  document.addEventListener('click', createFood)
  $('#start').remove()

  gameInterval = setInterval(function(){
    createFood(Math.floor(Math.random() * (BOARD_WIDTH - 20)))
  }, 1000)
}
