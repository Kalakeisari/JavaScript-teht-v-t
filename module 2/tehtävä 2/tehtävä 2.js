'use strict';

const participantCount = parseInt(prompt('Enter the number of participants:'));

const participants = [];

for (let i = 0; i < participantCount; i++) {
    const name = prompt(`Name of participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

const list = document.querySelector('#participant-list');

for (const name of participants) {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
}
