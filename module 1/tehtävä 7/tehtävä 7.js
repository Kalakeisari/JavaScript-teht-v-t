'use strict';

const rollsStr = prompt('How many times to roll die?');
const rolls = parseInt(rollsStr);


let sum = 0;

for (let i = 0; i < rolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
}

document.querySelector('#result').innerHTML = `Sum of ${rolls} rolls is ${sum}.`;
