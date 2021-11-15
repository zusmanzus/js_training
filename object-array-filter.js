function filter(nameList, attrName, attrValue) {
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i][attrName] === attrValue) {
            let newNameArray = nameList[i];
            return newNameArray;
        }
    }
 }

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];

let result = filter(objects, 'name', 'Иван');

export default {filter}
