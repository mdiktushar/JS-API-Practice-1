const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((Response) => Response.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quote");
  console.log(quote);
  blockQuote.innerHTML = quote.quote;
};

loadQuote();
