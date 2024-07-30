document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    if (query) {
        performSearch(query);
    }
});

function performSearch(query) {
    // Simulated search results
    const results = [
        { title: 'Example Result 1', snippet: 'This is a description of the first search result.', url: 'https://example.com/1' },
        { title: 'Example Result 2', snippet: 'This is a description of the second search result.', url: 'https://example.com/2' },
        { title: 'Example Result 3', snippet: 'This is a description of the third search result.', url: 'https://example.com/3' },
    ];

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        const resultTitle = document.createElement('h3');
        resultTitle.textContent = result.title;

        const resultSnippet = document.createElement('p');
        resultSnippet.textContent = result.snippet;

        const resultLink = document.createElement('a');
        resultLink.href = result.url;
        resultLink.textContent = result.url;

        resultItem.appendChild(resultTitle);
        resultItem.appendChild(resultSnippet);
        resultItem.appendChild(resultLink);

        resultsContainer.appendChild(resultItem);
    });
}
