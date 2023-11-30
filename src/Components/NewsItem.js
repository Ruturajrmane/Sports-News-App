import React from "react";

const NewsItem = (props) => {
  let { title, url, urlToImage, description } = props;
  return (
    <div>
      <div
        className="card col-sm-6 col-md-4 col-lg-3 "
        style={{ width: "18rem" }}
      >
        <img src={urlToImage} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem
//h-100 card-deck
