const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Oscar_Wilde_Sarony.jpg/440px-Oscar_Wilde_Sarony.jpg",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/440px-Albert_Einstein_Head.jpg",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/440px-FDR_1944_Color_Portrait.jpg",
  },
  {
    text: "I think, therefore I am.",
    author: "René Descartes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/440px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/440px-John_Lennon_1969_%28cropped%29.jpg",
  },

  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg",
  },

  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/440px-Thomas_Edison2.jpg",
  },
];
var currentQuoteIndex = -1;
const quoteText = document.querySelector(".quote-content h2");
const quoteAuthor = document.querySelector(".quote-content h3");
const quoteImage = document.querySelector(".quote-content img");
var qouteBtn = document.querySelector(".quote-button");
/*



*/

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("quoteIndex") !== null) {
    currentQuoteIndex = parseInt(localStorage.getItem("quoteIndex"));
  }
  if (currentQuoteIndex === -1) {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    localStorage.setItem("quoteIndex", currentQuoteIndex);
  }
  changeQuote();
});
qouteBtn.addEventListener("click", function () {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  localStorage.setItem("quoteIndex", currentQuoteIndex);
  changeQuote();
});

function changeQuote() {
  quoteText.innerHTML = quotes[currentQuoteIndex].text;
  quoteAuthor.innerHTML = `-${quotes[currentQuoteIndex].author}`;
  quoteImage.src = quotes[currentQuoteIndex].image;
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    localStorage.setItem("quoteIndex", currentQuoteIndex);
    changeQuote();
  }
});
