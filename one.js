function valueIsNumber(el) {
    return isNaN(el);
}

console.log(valueIsNumber(0));
console.log(valueIsNumber("Привіт"));
console.log(valueIsNumber("1пр"));
console.log(valueIsNumber(1));
/* 
1. Создайте функцию, которая проверяет является ли значние числом. 
Функция должна возвращать Boolean.
*/