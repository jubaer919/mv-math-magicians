import React, { useState, useEffect } from 'react';
import classes from './QuoteDisplay.module.css';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const headers = {
          'X-Api-Key': 'o/+TcyPrEUuJuXWcblwB/w==XUMaVQ2GEq6fcrHt',
        };
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', { headers });
        if (!response.ok) {
          throw new Error('Failed to fetch quote.');
        }
        const data = await response.json();
        const fetchedQuote = data[0].quote;
        setQuote(fetchedQuote);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return <div className={classes['quote-container']}>{quote}</div>;
};

export default QuoteDisplay;
