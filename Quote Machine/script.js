// Array of quotes
const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    }
  ];

  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    quoteElement.textContent = quotes[randomIndex].quote;
    authorElement.textContent = "- " + quotes[randomIndex].author;
  }

  // Event listener for the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", generateQuote);

  // Generate an initial quote
  generateQuote();