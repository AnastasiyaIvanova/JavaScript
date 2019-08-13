let border = document.createElement('div');
border.className = 'border';
document.body.appendChild(border);

let yourScore = 0;
let text = document.createElement('p');
text.innerText = `Score: ${yourScore}`;
text.id = 'score';
text.style.textAlign = 'center';
border.appendChild(text);

//начальные координаты змейки
let snakeStart = [[10,8],[10,9],[10,10]];
function Init(){
  for (let i = 0; i < snakeStart.length; i++){
    let snake = document.getElementById(snakeStart[i]);
    snake.className = 'cell snake';
  }
}

//начальное направление
let direction = [0,1];
let head = [10,10];
//движение змейки
function Move(){
  //определяем по нажатию клавиши направление змейки
  document.body.onkeydown = function(e){
      direction[1] = (e.keyCode - 38) % 2, direction[0] = (e.keyCode - 39) % 2;
  };
  //меняем направление головы
  head = snakeStart[length-1].map((item, index) => {
    return item + direction[index]
  });

  let nextStep = document.getElementById(head.join());
  if (nextStep == null){
    clearInterval(timer);
    alert('you lose\nYour score: ' + document.getElementById('score').innerText.split(' ')[1]);
    window.location.reload();
  }

  if (nextStep != null && nextStep.className == 'cell'){
    //удаляем хвост
    let tail = snakeStart.shift();
    document.getElementById(tail.join()).className = 'cell';
    //добавляем голову
    snakeStart.push(head);
    document.getElementById(head.join()).className = 'cell snake';
  } else if (nextStep != null && nextStep.className == 'cell apple') {
    snakeStart.push(head);
    length++;
    nextStep.className = 'cell snake';
    createApple(...coord);
    yourScore++;
    document.getElementById('score').innerText = `Score: ${yourScore}`;
  } else if (nextStep != null && nextStep.className == 'cell snake') {
    clearInterval(timer);
    alert('you eat yourself\nYour score: ' + document.getElementById('score').innerText.split(' ')[1]);
    window.location.reload();
  }
}

let length = 3;
let coord = [20,20];
function field(oX, oY) {
  for (let x = 0; x < oX; x++){
    let cordX = document.createElement('div');
    border.appendChild(cordX);
    cordX.className = 'field';
    for (let y = 0; y < oY; y++){
      let cordY = document.createElement('div');
      cordX.appendChild(cordY);
      cordY.className = 'cell';
      cordY.id = x+','+y;
    }
  }
}

//создаем еду на клетке, на которой нет змеи
function createApple(oX, oY){
  let x = Math.round(Math.random()*(oX-1));
  let y = Math.round(Math.random()*(oY-1));
  let apple = document.getElementById(x + ',' + y);
  if (apple.className == 'cell'){
    apple.className = 'cell apple';
  } else{
    createApple(...coord);
  }
  return apple;
}

//создаем поле
field(...coord);

let buttons = document.createElement('div');
border.appendChild(buttons);
let button = document.createElement('button');
button.className = 'button';
button.setAttribute('onclick', "Start()");
button.innerText = 'Start';
buttons.appendChild(button);


  Init();
function Start(){

  timer = setInterval(function(){
             Move();
          },400);
  createApple(...coord);
}
