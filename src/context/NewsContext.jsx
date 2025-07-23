import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [generalArticles, setGeneralArticles] = useState([]);
  const [sportsArticles, setSportsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const [generalRes, sportsRes] = await Promise.all([
          axios.get('https://gnews.io/api/v4/top-headlines?lang=en&token=2fd4672d98ae88714c15592f0c4daba8'),
          axios.get('https://gnews.io/api/v4/search?q=sports&lang=en&token=2fd4672d98ae88714c15592f0c4daba8')
        ]);
        setGeneralArticles(generalRes.data.articles);
        setSportsArticles(sportsRes.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  return (
    <NewsContext.Provider value={{ generalArticles, sportsArticles, loading }}>
      {children}
    </NewsContext.Provider>
  );
}
