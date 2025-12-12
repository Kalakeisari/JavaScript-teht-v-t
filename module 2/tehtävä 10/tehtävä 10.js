'use strict';

const candidateCount = parseInt(prompt('How many candidates?'));

const candidates = [];

for (let i = 0; i < candidateCount; i++) {
  const name = prompt(`Name for candidate ${i + 1}:`);
  candidates.push({
    name: name,
    votes: 0
  });
}

const voterCount = parseInt(prompt('How many voters?'));

for (let i = 0; i < voterCount; i++) {
  const vote = prompt(`Voter ${i + 1}, who do you vote for? (empty = empty vote)`);

  if (vote === '' || vote === null) {
    continue;
  }

  const candidate = candidates.find(c => c.name === vote);

  if (candidate) {
    candidate.votes++;
  }
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log('results:');

for (const candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
