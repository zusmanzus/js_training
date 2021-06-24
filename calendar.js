let weekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let days = [];
let weekdayNumber;
const weekDay = 'воскресенье';

for (let i = 1; i <= 31; i++){
  days.push(i);
}

for (let j = 0; j < 31; j++) {
  weekdayNumber = (j + weekdays.indexOf(weekDay)) % 7;
  console.log (`${days[j]} января, ${weekdays[weekdayNumber]}`);
  }
