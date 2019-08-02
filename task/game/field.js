let div = document.createElement('div');
document.body.appendChild(div);

let text = document.createElement('p');
text.innerText = 'Score';
text.style.textAlign = 'center';
div.appendChild(text);

let score = document.createElement('p');
score.innerText = '0';
score.style.textAlign = 'center';
score.id = 'score';
div.appendChild(score);

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
//движение змейки
function Move(){
  //определяем по нажатию клавиши направление змейки
  document.body.onkeydown = function(e){
      direction[1] = (e.keyCode - 38) % 2, direction[0] = (e.keyCode - 39) % 2;
  };
  //меняем направление головы
  let head = snakeStart[length-1].map(function(item, index){return item + direction[index]});

  let nextStep = document.getElementById(head.join());
  // console.log('!! ' + nextStep.id);
  if (nextStep == null){
    clearInterval(timer);
    alert('you lose');
    window.location.reload();
  }

if (nextStep != null && nextStep.className == 'cell'){
  //удаляем хвост
  let tail = snakeStart.shift();
  document.getElementById(tail.join()).className = 'cell';
  //добавляем голову
  snakeStart.push(head);
  document.getElementById(head.join()).className = 'cell snake';
} else
    if (nextStep != null && nextStep.className == 'cell apple'){
      console.log(head);
    snakeStart.push(head);
    nextStep.className = 'cell snake';
    createApple(oX, oY);
    document.getElementById('score').innerText = Number.parseInt(document.getElementById('score').innerText) + 1;
    console.log(snakeStart);
  }
}

let length = 3;
let oX = 20;
let oY = 20;
// создаем поле игры
function field(oX, oY) {
  for (let x = 0; x < oX; x++){
    let cordX = document.createElement('div');
    document.body.appendChild(cordX);
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
    createApple(oX, oY);
  }
  return apple;
}

//создаем поле
field(oX, oY);

let buttons = document.createElement('div');
document.body.appendChild(buttons);
let button = document.createElement('button');
button.className = 'button';
button.setAttribute('onclick', "Start()");
button.innerText = 'Start';
buttons.appendChild(button);

function Start(){
  Init();
  timer = setInterval(function(){
             Move();
          },400);
  createApple(oX, oY);
}
