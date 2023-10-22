import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'

const BookCard = ({ book }) => {

  return (
    <div className='book'>
      <img src={book.ImageUrl} alt='bookImage' height={'70px'}/>
      <h3 className='bookTitle'>{book.Name}</h3>
      <p className='bookAuthor'>Author: {book.Author}</p>
      <p className='bookPrice'>Price: ${book.Price}</p>
      <p>Genre: {book.Genre}</p>
      <Link to={`/book/${book._id}`}><button>Details</button></Link>
    </div>
  );
};

export default BookCard;
