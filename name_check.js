const name = 'hArRy';
const surname = 'pOTtEr';

// const name = 'Harry';
// const surname = 'Potter';

let NAME_FIRST_LETTER = name.substring(0, 1);
let NAME_LETTERS_FROM_THE_SECOND = name.substring(1);
let SURNNAME_FIRST_LETTER = surname.substring(0, 1);
let SURNAME_LETTERS_FROM_THE_SECOND = surname.substring(1);


let nameCapitalFirstLetter = NAME_FIRST_LETTER.toUpperCase();
let nameSmallLetters = NAME_LETTERS_FROM_THE_SECOND.toLowerCase();
const normalizedName = nameCapitalFirstLetter + nameSmallLetters;

let surnameCapitalFirstLetter = SURNNAME_FIRST_LETTER.toUpperCase();
let surnameSmallLetters = SURNAME_LETTERS_FROM_THE_SECOND.toLowerCase();
const normalizedSurname = surnameCapitalFirstLetter + surnameSmallLetters;

console.log(`${normalizedName} ${normalizedSurname}`);
let resultName = (name === normalizedName) ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
let resultSurname = (surname === normalizedSurname) ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');


