let roadMines = [false, false, false, true, false, false, false, false, false, false];
let position;
// let damage = 0;
let lives = 2;

for (let i = 0; i < roadMines.length; i++) {
  position = i + 1;
  console.log(`танк переместился на ${position}`); 
  if (roadMines[i]) {
    console.log('танк повреждён');
    lives -= 1;
    if (lives == 0) {
      console.log('танк уничтожен');
      break;
      }
  }
}

// for (i = 0; i < roadMines.length; i++) {
//   position = i + 1;
//   console.log(`танк переместился на ${position}`); 
//   if (roadMines[i] == false) {
//     continue;
//   }
//   else if (roadMines[i] == true && damage < 1) {
//     console.log('танк повреждён');
//     damage += 1;
//   }
//   else {
//     console.log('танк уничтожен');
//     break;
//   }
// } 