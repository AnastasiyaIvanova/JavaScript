let a = interNumb();
let b = interNumb();
let action = prompt('введите действие','');
let result,c;

if (action == '+'){
  c = sum(a,b);
} else if (action == '-'){
  c = dif(a,b);
} else if (action == '/'){
  c = div(a,b);
} else if (action == '*'){
  c = mult(a,b);
} else c = null;

if (c != null)
  alert(c);
  else {
    alert('Неверное действие');
  }

  //проверка на число
  function isNumeric(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
  }

  //повторный ввод
  function interNumb()
  {
    let x = prompt('введите число','');
    if (!isNumeric(x)) {
      return interNumb();
    }
    else{
      return x;
    }

  }


function sum(a,b)
{
  result = +a + +b;
  return result;
}

function dif(a,b)
{
  result = +a - +b;
  return result;
}

function div(a,b)
{
  result = +a / +b;
  return result;
}

function mult(a,b)
{
  result = +a * +b;
  return result;
}
