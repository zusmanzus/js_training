const password = 'Matrix_Is_Here';
const FORBIDDEN_VALUE_1 = '-';
const FORBIDDEN_VALUE_2 = '_';

if (password.length >= 4 && (password.includes(FORBIDDEN_VALUE_1) || password.includes(FORBIDDEN_VALUE_2))) {
    console.log('Пароль надежный');
}
else {
    console.log('Пароль недостаточно надёжный');
}