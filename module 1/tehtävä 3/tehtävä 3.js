'use strict';

const num1 = prompt('Give first integer:');
const num2 = prompt('Give second integer:');
const num3 = prompt('Give third integer:');

const a = parseInt(num1);
const b = parseInt(num2);
const c = parseInt(num3);

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.querySelector('#output').innerHTML =
  `Sum: ${sum}<br>
   Product: ${product}<br>
   Average: ${average}`;
