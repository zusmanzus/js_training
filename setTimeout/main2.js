document.addEventListener('DOMContentLoaded', function() {

let h2 = document.createElement('h2');
let input = document.createElement('input');
let timerId;

document.body.append(h2);
document.body.append(input);

// отменяем таймаут  в момент нового введения буквы

function textLoad() {
  let someString = input.value;
  let change = function() {
    clearTimeout(timerId);
  }

  // сделала 3000мс, чтобы было заметнее

  function inputListener() {
    someString.onchange = change();
    timerId = setTimeout(function() {
      h2.textContent = someString;
    }, 3000);
  }

  inputListener();
}

input.addEventListener('input', textLoad);

});
