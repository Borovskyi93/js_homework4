'use strict';

const userChoice = prompt('Выберите действие: add, sub, mult, div.');
const firstNumber = Number(prompt('Введите первое число:'));
const secondNumber = Number(prompt('Введите второе число:'));

if (userChoice == 'add') {
    const addNumber = firstNumber + secondNumber;
    alert(`Результат: ${firstNumber}+${secondNumber}=${addNumber}`);
} else if (userChoice == 'sub') {
    const subNumber = firstNumber - secondNumber;
    alert(`Результат: ${firstNumber}-${secondNumber}=${subNumber}`);
} else if (userChoice == 'mult') {
    const multNumber = firstNumber * secondNumber;
    alert(`Результат: ${firstNumber}*${secondNumber}=${multNumber}`);
} else {
    const devNumber = firstNumber / secondNumber;
    alert(`Результат: ${firstNumber}/${secondNumber}=${devNumber}`);
}
