'use strict';

const form = document.getElementById('search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // estä lomakkeen oletuslähetys

    const query = document.getElementById('query').value.trim();

    if (!query) {
        console.log('Please enter a TV series name.');
        return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log('Search results:', data); // tulosta konsoliin
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
