const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

// console.log(author);

let apiQuotes = [];

//**Show Loading */
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//**Hide Loading */

function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// todo : Show new Quotes
function newQuotes() {
  loading();
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
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  complete();
}

// Get quotes from API
async function getQuotes() {
  loading();
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

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//EventListener
newQuoteBtn.addEventListener("click", newQuotes);
twitterBtn.addEventListener("click", tweetQuote);

//**On Load
getQuotes();
// loading();
