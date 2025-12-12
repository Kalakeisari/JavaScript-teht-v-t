'use strict';

const form = document.getElementById('search-form');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();
    if (!query) {
        console.log('Please enter a TV series name.');
        return;
    }

    resultsDiv.innerHTML = '';

    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            data.forEach(tvShow => {
                const article = document.createElement('article');

                const h2 = document.createElement('h2');
                h2.textContent = tvShow.show.name;
                article.appendChild(h2);

                const link = document.createElement('a');
                link.href = tvShow.show.url;
                link.textContent = 'Show details';
                link.target = '_blank';
                article.appendChild(link);

                const img = document.createElement('img');
                img.src = tvShow.show.image?.medium || '';
                img.alt = tvShow.show.name;
                article.appendChild(img);

                const summaryDiv = document.createElement('div');
                summaryDiv.innerHTML = tvShow.show.summary || 'No summary available';
                article.appendChild(summaryDiv);

                resultsDiv.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
