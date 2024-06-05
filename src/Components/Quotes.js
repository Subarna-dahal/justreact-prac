import React, { useEffect, useState } from "react";
import "./Quotes.css"; 

const Quotes = () => {
  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null); 

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <div className="quotes-container"> 
      <h1> Quote Generator</h1>
      <section>
        <button className="new-quote-btn" onClick={getNewQuote}>
          New Quote
        </button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </div>
  );
};

export default Quotes;
