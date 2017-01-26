class Snake{
  constructor(top, left){
    this.top = top
    this.left = left
  }

  render(){
    var $board = $('#board')
    var length = 4
    var snakeDivs = []

    for (var i = 0; i < length; i++) {
      snakeDivs.push(`<div class="snake" data-id="${i}"> </div>`)
    }
    $board.append(snakeDivs.join(""))


 }





    // var divTop = 50
    // var snakePos = snakeDivs.map(function(piece, i){
    //   snakeDivs[i] = $('.snake')
    //   $('.snake').css({top: `${divTop}px`, left: '100px', position: 'absolute'})
    //   divTop += 20
    // })
    //

    //
    // var snakeDivs =  this.body.map(function(piece){
    //   snakeDivs.push(`<div class="snake"> </div>`)
    // })
    // debugger
    //
    // var divTop = 50
    //
    // for (var i = 0; i < snakeDivs.length; i++) {
    //   snakeDivs[i].css({top: `${divTop}px`, left: '100px', position: 'absolute'})
    //   divTop += 20
    // }

  // randomTop(){
  //   return (Math.floor(Math.random() * 560)))
  // }
  //
  // randomLeft(){
  //   return (Math.floor(Math.random() * (580)))
  // }

}
