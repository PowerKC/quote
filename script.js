const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', generateQuote);
