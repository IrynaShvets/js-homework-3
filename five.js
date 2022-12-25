function sum(el) {
  const arr = Object.values(el);

  return arr.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);
}

console.log(sum({ name1: 200, name2: 500, name3: 400 }));
console.log(sum({ name11: 700, name22: 1500, name33: 100, name44: 200 }));

/* 
 5. Создайте функцию, которая принимает объект типа {name1: 200, name2: 500, name3: 400}. 
 Функция должна вернуть сумму всех свойств объекта. 
 */
