import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Searchbar.css"
const Searchbar = () => {
  return (
    <div className='searchbar'>
    <form>
    <button className='searchbtn'> <FontAwesomeIcon icon={faSearch}  /></button>
      <input
          type="text"
          placeholder="Search for anything"
          className='search form-control'
          aria-label="Search"/>
      </form>
    </div>
  )
}

export default Searchbar
