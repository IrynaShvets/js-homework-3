function stringNameSurname(el) {
   return `${el.name} ${el.surname}`;
}

console.log(
    stringNameSurname({
    name: "Василь",
    surname: "Процак",
  })
);


/* 
4. Создайте функцию, которая принимает объект со свойствами name и surname
 и возвращает строку в формате Имя Фамилия.
*/