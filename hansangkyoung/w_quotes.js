const quotes = [
    {
        quote: "The only devils in this world are those running around in our own hearts, and that is where all our battles should be fought.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Improvements are invented only by those who can feel that something is not good.",
        author: "Friedrich Nietzsche",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;