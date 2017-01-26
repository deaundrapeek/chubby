class Board{
  constructor(){
    // const BOARD_HEIGHT = 600
    // const BOARD_WIDTH = 600


    this.snake = new Snake()
  }

  render(){
    let $board = $('#board')

    this.snake.render()
    this.start()

    // var rect = $board.getBoundingClientRect()
    // console.log(rect.top, rect.right, rect.bottom, rect.left)
  }

  start(){
    $('#start').click(function(){

      $('#start').css("display", "none")
      $('.snake').css("background-color", "#8b008b")
    })
  }




}
