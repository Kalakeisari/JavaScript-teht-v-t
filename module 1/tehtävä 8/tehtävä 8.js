'use strict';

const startYear = parseInt(prompt('Enter start year:'));
const endYear = parseInt(prompt('Enter end year:'));

const list = document.querySelector('#leap-list');

for (let year = startYear; year <= endYear; year++) {

  const isLeap =
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0);

    if (isLeap) {
        const li = document.createElement('li');
        li.textContent = year;
        list.appendChild(li);
    }
}
