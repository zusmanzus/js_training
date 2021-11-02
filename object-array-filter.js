function filterByAttribute(nameList, attrName, attrValue) {
    for (i = 0; i < nameList.length; i++) {
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

let result = filterByAttribute(objects, 'name', 'Иван');

export default {filterByAttribute}
