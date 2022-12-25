function averageOfNumbers(num1, num2, num3) {
  if (num1 === "" || num2 === "" || num3 === "") {
    return;
  }
  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    return (num1 + num2 + num3) / 3;
  }
}

console.log(averageOfNumbers(3, 5, 4));
console.log(averageOfNumbers(5, 1, 3));
console.log(averageOfNumbers(1, 3, "Привіт"));
console.log(averageOfNumbers(1, 3));
console.log(averageOfNumbers());

/* 
2. Создайте фукнцию, которая принимает 3 числа. 
Возвращать должна среднее из этих 3х чисел. (Не забудьте добавить проверки на
то, что аргументы не пустые и являются числами).
*/
