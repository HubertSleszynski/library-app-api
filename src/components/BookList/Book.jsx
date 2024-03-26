import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = book => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <Link to={`/library_api_v2/${book.id}`} {...book}>
          <img src={book.cover_img} alt="cover" />
        </Link>
      </div>
      <div className="book-item-info text-center">
        <Link to={`/library_api_v2/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author ? book.author.join(", ") : ""}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;