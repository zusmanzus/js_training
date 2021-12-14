document.addEventListener('DOMContentLoaded', function() {

  	let startButton = document.querySelector('.startButton');
  	let timerOutput = document.querySelector('.timerOutput');
  	let inputTime = document.querySelector('.inputTime');
    let timeCount;
    let intervalID;


  	function onClick() {
      clearInterval(intervalID);
      let inputValue = inputTime.value;
    	timeCount = parseInt(inputValue, 10); // тут мы преобраовали инпут в число

      if (timeCount < 0) {
        timeCount = -timeCount; // на случай ввода отрицательного числа
      }

      timerOutput.textContent = timeCount; // тут див выводит число, которое мы ввели



      function interval(start, end) {
        let input = start;
        intervalID = setInterval(function() {
          timerOutput.textContent = input;
          if (input == end) {
            clearInterval(intervalID);
          }
           else {
            input--;
          }
        }, 1000);
      }

      interval(timeCount, 0);
    }

  startButton.addEventListener('click', onClick);

});
