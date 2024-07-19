document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: 'First Article',
            date: '2024-07-18',
            content: 'This is the content of the first article.'
        },
        {
            title: 'Second Article',
            date: '2024-07-19',
            content: 'This is the content of the second article.'
        }
        // Add more articles as needed
    ];

    const articleContainer = document.getElementById('article-container');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        const titleElement = document.createElement('h2');
        const dateElement = document.createElement('p');
        const contentElement = document.createElement('p');

        titleElement.textContent = article.title;
        dateElement.textContent = `Date: ${article.date}`;
        contentElement.textContent = article.content;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(dateElement);
        articleElement.appendChild(contentElement);

        articleContainer.appendChild(articleElement);
    });
});
