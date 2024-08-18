import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const handleSubmit = (e)=>{
      e.preventDefault();
      const searchValue = e.target.elements.search.value;
      if (!searchValue) return;
      setSearch(searchValue);
      
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="search" className='form-input search-input' placeholder='cat' name="search"/>
        <button type='submit' className="btn">search</button>
      </form>
    </section>
  )
}

export default SearchForm
