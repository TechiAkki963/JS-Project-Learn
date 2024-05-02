const quoteContainer = document.querySelector("#quote-generator");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");

console.log(author);

let apiQuotes = [];

// todo : Show new Quotes
function newQuotes() {
  //todo : Pick random from apiQuotes Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent = quote.text;

  //todo : Check Author
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  //todo: Check Quote Length for Styling
  if (quote.text.length > 10) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    //
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
    console.log(apiQuotes[15]);
  } catch (error) {
    //!error handling
  }
}

//**On Load
getQuotes();
