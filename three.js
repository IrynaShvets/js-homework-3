function checkingObjectForProperty(nameProperty) {
    return nameProperty.hasOwnProperty('name');
}

console.log(
  checkingObjectForProperty({
    name: "Алла",
    email: "alla@ukr.net",
    password: "dfggf4125",
  })
);

console.log(
  checkingObjectForProperty({ email: "123@ukr.net", password: "1245214" })
);

console.log(
  checkingObjectForProperty({
    name: "Влад",
    email: "vlad@ukr.net",
    password: "414251hg",
  })
);

/* 
3. Создайте функцию, которая принимает объект 
и проверяет есть ли в нем свойство 'name'. 
Вернуть Boolean тип. */
