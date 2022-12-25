function convertedObject(obj) {
  let outputObject = {};
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] /= 4;
      outputObject[key] = Math.round(obj[key]);
    }
    if (typeof obj[key] == "string") {
      obj[key] = obj[key].replace(obj[key], "Hello, Palmo.");
      outputObject[key] = obj[key];
    }
  }
  return outputObject;
}

console.log(
  convertedObject({ text: "Привіт", number: 10.789, number2: 4.89, symbol: {}, null: null })
);
console.log(
  convertedObject({ text: "Hello", number: 100.89, number2: 6.778, symbol: [], undefined: undefined })
);

/* 6. Создайте функцию, которая принимает объект. 
Все ЧИСЛОВЫЕ свойства объекта нужно поделить на 2,
если получилось НЕ целое число - округлить его по математическим правилами, 
а текстовые поменять на строку Hello, Palmo. 
Если свойство не числовое или не текстовое - удалить его из объекта. 
Функция должна вернуть переделанный объект. */
