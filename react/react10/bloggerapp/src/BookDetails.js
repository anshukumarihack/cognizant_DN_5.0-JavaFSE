import React from 'react';

function BookDetails(props) {
  return (
    <div className="detail-column">
      <h2>Book Details</h2>
      <ul className="detail-ul">
        {props.books.map((book) => (
          <div key={book.id} className="detail-item book-item">
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
