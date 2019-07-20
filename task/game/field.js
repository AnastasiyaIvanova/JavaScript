let div = document.createElement('div');
document.body.appendChild(div);

let text = document.createElement('p');
text.innerText = 'Score:';
text.style.textAlign = 'center'
div.appendChild(text);

let newDiv = document.createElement('div');
newDiv.className = 'border';
document.body.appendChild(newDiv);

let buttons = document.createElement('div');
document.body.appendChild(buttons);
let button = document.createElement('button');
button.className = 'button';
button.setAttribute('onclick', "Start()");
button.innerText = 'Start';
buttons.appendChild(button);
