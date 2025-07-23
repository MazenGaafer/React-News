import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/NewsContext';
import { motion } from 'framer-motion';

function GeneralNews() {
  const { generalArticles, loading } = useContext(NewsContext);
  const [search, setSearch] = useState('');

  if (loading) return <div className="text-center mt-5">Loading news...</div>;

  // Banner: أحدث خبر
  const featured = generalArticles[0];

  // فلترة الأخبار حسب البحث
  const filteredArticles = generalArticles.slice(1).filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Banner */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
          style={{
            background: 'linear-gradient(90deg, #8e24aa 0%, #512da8 100%)',
            borderRadius: 18,
            boxShadow: '0 4px 32px 0 rgba(81,45,168,0.10)',
            marginBottom: 36,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: 220,
            color: 'white',
            position: 'relative',
            flexWrap: 'wrap',
          }}
        >
          {featured.urlToImage && (
            <img
              src={featured.urlToImage}
              alt={featured.title}
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: 16,
                margin: 18,
                boxShadow: '0 2px 16px 0 rgba(81,45,168,0.13)',
                border: '3px solid #fff',
                background: '#fff',
                maxWidth: '90vw',
                maxHeight: '40vw',
              }}
            />
          )}
          <div style={{ flex: 1, padding: 18, minWidth: 0 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 8, fontFamily: 'Montserrat, sans-serif', color: 'white', letterSpacing: 1.2, lineHeight: 1.2 }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#f3e6fa', marginBottom: 12, lineHeight: 1.4 }}>{featured.description}</p>
            <motion.a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-block',
                padding: '8px 22px',
                background: 'linear-gradient(90deg, #fff 0%, #FFD6FA 100%)',
                color: '#8e24aa',
                borderRadius: 8,
                fontWeight: 'bold',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px 0 rgba(81,45,168,0.10)',
                border: 'none',
                letterSpacing: 1,
              }}
            >
              Read More
            </motion.a>
          </div>
        </motion.div>
      )}
      {/* شريط البحث */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
      >
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: 400,
            padding: '10px 18px',
            borderRadius: 8,
            border: '1.5px solid #8e24aa',
            fontSize: '1.1rem',
            fontFamily: 'Montserrat, sans-serif',
            outline: 'none',
            boxShadow: '0 2px 8px 0 rgba(81,45,168,0.07)',
            transition: 'border 0.2s',
            margin: '0 auto',
          }}
        />
      </motion.div>
      {/* العنوان والكروت */}
      <h2 className="mb-4" style={{ color: '#232526', fontWeight: 'bold', letterSpacing: 1.2, textAlign: 'center', fontSize: '2.2rem', fontFamily: 'Montserrat, sans-serif' }}>General News</h2>
      <div className="row">
        {filteredArticles.map((article, idx) => (
          <div className="col-12 col-md-4 mb-4" key={idx}>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0px 8px 32px 0px rgba(35,37,38,0.13)' }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="card h-100"
              style={{
                borderRadius: 16,
                background: 'white',
                boxShadow: '0px 2px 16px 0px rgba(35,37,38,0.08)',
                padding: '2px',
                position: 'relative',
                overflow: 'hidden',
                minWidth: 0,
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                borderRadius: 16,
                pointerEvents: 'none',
                padding: 0,
                border: '2px solid transparent',
                background: 'linear-gradient(90deg, #fff, #fff) padding-box, linear-gradient(270deg, #8e24aa, #512da8, #8e24aa, #512da8) border-box',
                backgroundOrigin: 'padding-box, border-box',
                backgroundClip: 'padding-box, border-box',
                animation: 'moveGradient 3s linear infinite',
              }} />
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="card-img-top"
                  style={{ maxHeight: '200px', objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16, zIndex: 1, width: '100%' }}
                />
              )}
              <div className="card-body d-flex flex-column" style={{ position: 'relative', zIndex: 1 }}>
                <h5 className="card-title" style={{ color: '#414345', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: 1.3 }}>{article.title}</h5>
                <p className="card-text" style={{ color: '#6c757d', fontSize: '0.98rem', lineHeight: 1.4 }}>{article.description}</p>
                <motion.a
                  href={article.url}
                  className="btn mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.96 }}
                  style={{ fontWeight: 'bold', borderRadius: 8, background: 'linear-gradient(90deg, #8e24aa 0%, #512da8 100%)', color: 'white', border: 'none', boxShadow: '0 2px 8px 0 rgba(81,45,168,0.10)', fontSize: '1rem', padding: '8px 0' }}
                >
                  Read More
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralNews;
