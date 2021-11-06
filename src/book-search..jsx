import React from 'react'

const BookSearch = (props) => {
    return(
        <div className= 'book-Search'>
            <form className='form' onSubmit= { props.searchArea} action = "" >
                <input placeholder= "Search for books" onChange= { props.handleSearch} type= " text" />
                <button type='submit' className= 'button'>Search</button>
                <select className= 'sort' defaultValue="Sort" onChange={props.handleSort} >
                  <option disabled value="Sort">Sort by</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default BookSearch;  