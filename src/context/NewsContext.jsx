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
          axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=27b72cf6eed44cdcb11855aed93e1c59'),
          axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=27b72cf6eed44cdcb11855aed93e1c59')
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
