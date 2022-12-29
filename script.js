// Задание 1
const Num1 = document.querySelector (".num1");
const Num2 = document.querySelector (".num2");
const Task1But = document.querySelector(".task1But");
const Task1Ans = document.querySelector(".task1Ans");

Task1But.addEventListener("click", function() {
    if (isNaN (Num1.value && Num2.value )) {
        alert ("Введите числовые значеения!");
        return;
    }
    else {
        if (Num1.value <= 1 && Num2.value >= 3) {
            Task1Ans.textContent = "Значение соответсвует условию"
        }
        else {
            Task1Ans.textContent = "Значение не соответсвует усовию"
        }
    }
});

// Задание 2
const Task2But = document.querySelector(".task2But");
const Task2Ans = document.querySelector(".task2Ans");

let test = true;
console.log (test===true ? '+++' : '---');

Task2But.addEventListener("click", function() {
    Task2Ans.textContent = "console.log (test===true ? '+++' : '---')";
});

// Задание 3
const day = document.querySelector (".day");
const Task3But =document.querySelector (".task3But");
const Task3Ans = document.querySelector (".task3Ans");

Task3But.addEventListener("click", function() {
    const dayValue = Number(day.value);
    if (dayValue > 0 && dayValue <= 10){
        Task3Ans.textContent = "Первая декада месяца"
    }
    else if (dayValue > 10 && dayValue <=20) {
        Task3Ans.textContent = "Вторая декада месяца"
    }
    else {
        Task3Ans.textContent = "Третья декада месяца"
    }
});

// Задание 4

const numb = document.querySelector (".numb");
const Task4But =document.querySelector (".task4But");
const Task4Ans = document.querySelector (".task4Ans");

Task4But.addEventListener("click",function() {
    const numberValue = Number(numb.value);
    const hundreds = Math.trunc(numberValue%1000/100);
    const dozens = Math.trunc(numberValue%100/10);
    const pieces = Math.trunc(numberValue%10);
    Task4Ans.textContent = `В числе ${numberValue} количесвто сотен: ${hundreds},\
    десятков: ${dozens}, единиц: ${pieces}`;
})

// Задание 5

const year = document.querySelector(".year");
const Task5But =document.querySelector (".task5But");

Task5But.addEventListener("click",function() {
    const yearValue = Number(year.value);
    if (yearValue % 4 == 0) {
        alert (yearValue + " год - високосный");
    }
    else {
        alert (yearValue + " год - невисокосный");
    }
})
