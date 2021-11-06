import React from 'react';

const BookCard = (props) => {
    return(
  <div className='card-container'>
  
      <img src={props.image} alt=""/>
     
      <div className='description'>
      <a href= {props.preview}> 
          <h2>{props.title}</h2>
          </a>
          <h3>Author:{props.author}</h3>
          <p>Published in {
                 props.published.substring(0, 4)
              } </p>
    
      </div>
  </div>
    )
}
export default BookCard;
