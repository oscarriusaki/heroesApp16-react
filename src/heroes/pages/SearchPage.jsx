import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const { onChange, textSearch } = useForm({
    textSearch:''
  })
  const {search} = useLocation();
  const { q = ''} = queryString.parse(search)  
  const heroes = getHeroByName( q );

  const navigate = useNavigate();

  const onInputSubmit = (value) => {
    value.preventDefault();
    // if(textSearch.trim().length <= 0) return;
    // console.log(textSearch);
    navigate(`?q=${textSearch}`)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <h1>Search Hero</h1>
          <hr />
          <form onSubmit={onInputSubmit}>
            <input 
              type="text" 
              placeholder='search hero'
              className='form-control'
              name='textSearch'
              value={textSearch}
              onChange={onChange}
              />
              <button className='btn btn-outline-primary'>Searh</button>
          </form>
        </div>
        <div className="col-md-7">
          <h1>Searching Hero</h1>
          <hr />

          {
            (q.length === 0) 
            ?
            <div className="alert alert-primary">
              Search a hero
            </div>
            : (heroes.length === 0) && 
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          }
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
