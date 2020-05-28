document.addEventListener("DOMContentLoaded", () => {
  const width = 10;
  const grid = document.querySelector(".grid");
  var squares = Array.from(document.querySelectorAll(".grid div"));
  const score = document.querySelector("#score");
  const startBtn = document.querySelector("#start_button");

  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ];

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ];

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ];

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ];

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ];

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];


  var currentPosition = 4;
  var currentRotation = 0;
   
  var random = Math.floor(Math.random()*theTetrominoes.length);
  console.log(random);
  var current = theTetrominoes[random][currentRotation];


  function draw(){
    current.forEach(function(val){
      squares[currentPosition+ val].classList.add("tetremino");
    })
  }
  function undraw(){
    current.forEach(function(val){
      squares[currentPosition+ val].classList.remove("tetremino");
    })
  }



  var timerId = setInterval(moveDown,1000);
  function moveDown(){
    undraw();
    currentPosition += width;
    draw()
  }


  //draw();
  });
