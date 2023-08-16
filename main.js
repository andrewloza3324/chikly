//Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
let one = document.querySelector(".one");
let num = 0;
while (num < 10) {
  num++;
  let newLi = document.createElement("li");
  newLi.textContent = num;
  one.append(newLi);
}

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
let two = document.querySelector(".two");
for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    let newE = document.createElement("li");
    newE.textContent = i;
    two.append(newE);
  }
}

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
let three = document.querySelector(".three");
let seven = 7;

for (let i = 1; i <= 10; i++) {
  let newEl = document.createElement("li");
  newEl.textContent = i * seven;
  three.append(newEl);
}

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

let four = document.querySelector(".four");
let array = [1, 2, 3, 4, 5];
let numb = 0;

while (numb < array.length) {
  let newELEM = document.createElement("li");
  newELEM.textContent = array[numb];
  four.append(newELEM);
  numb++;
}

//Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

let five = document.querySelector(".five");
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= array2.length; i++) {
  if (i !== 7) {
    let newElement = document.createElement("li");
    newElement.textContent = i;
    five.append(newElement);
  } else {
    break;
  }
}

// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
let six = document.querySelector(".six");
function continuetoN(n) {
  for (let i = 0; i <= n; i++) {
    if (i <= n) {
      let elem = document.createElement("li");
      elem.textContent = i;
      six.append(elem);
    }
  }
}
continuetoN(25);
