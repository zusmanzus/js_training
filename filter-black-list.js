let allMails = ['1@mail.ru', '2@gmail.com', '3@hotmail.com', '4@protonmail.com', '5@yandex.ru', '6@yahoo.com', '7@outlook.com', '8@whatever.se', '9@whatever.io', '10@whatever.no'];
let blackListMails = ['10@whatever.no', '13@mail.ru', '7@outlook.com', '17@mail.ru', '1@mail.ru', '3@hotmail.com', '24@mail.ru'];

function createWhiteList(allMails, blackListMails) {
  let whiteListMails = [];
  for (let i = 0; i < allMails.length; i++) {
    if (blackListMails.includes(allMails[i]) !== true) { // 10 7 1 3
      whiteListMails.push(allMails[i]); // 2 4 5 6 8 9 
    }
  } 
  return whiteListMails;
}

createWhiteList(allMails, blackListMails);

export default createWhiteList;