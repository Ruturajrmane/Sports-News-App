
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(6);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchNews = async () => {
    setLoading(true);

    let url = `https://newsapi.org/v2/everything?apiKey=609ebd84c0a4457d8da52829a460aa34&q=${props.category}&pageSize=6&page=${page}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
      setTotalPages(Math.ceil(data.totalResults / pageSize));
      setLoading(false);
    } catch (e) {
      console.log("something is not working", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [props.category, page]);

  const clickNext = () => {
    if (page <= totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const clickPrevious = () => {
    if (page !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} url={element.url} urlToImage={element.urlToImage} description={element.description} />
            </div>
          ))}
        </div>
      </div>
      <div className="container d-flex justify-content-between span2">
        <button disabled={page === 1} onClick={clickPrevious} type="button" className="btn btn-dark btn-lg">
          &larr; Prev
        </button>
        <button disabled={page >= totalPages} onClick={clickNext} type="button" className="btn btn-dark btn-lg">
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
