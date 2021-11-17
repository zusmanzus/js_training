let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];

function filter(arr, name, name1) {
  for (let key in arr) {
    if (arr[key][name].includes(name1)) {
      let arr1 = [];
      arr1.push(arr[key]);
      return arr1;
    }
  }
}

const result = filter(objects, 'name', 'Иван');

export default filter
