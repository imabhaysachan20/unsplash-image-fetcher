import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useGlobalContext } from './context';
const Gallery = () => {
  const {search,setSearch} = useGlobalContext();
  
  
  const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&page=1&query=${search}`;
  
  const response = useQuery({
    queryKey:['images', search],
    queryFn:async ()=>{
      const result = await axios.get(url);
      return result.data
    }
  })
  if (response.isLoading) {
    return <section className='image-container'>
      <h4>Loading...</h4>
    </section>
  }
  if (response.isError) {
    <section className='image-container'>
      <h4>Error</h4>
    </section>
  }
  const results = response.data.results;
  if (results.length<1) {
    return <section className='image-container'>
    <h4>No Result</h4>
  </section>
  }

  return (
    <section className='image-container'>
      {results.map((item)=>{
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={item.alt_description} className='img'></img>
      })}
    </section>
  )
}

export default Gallery
