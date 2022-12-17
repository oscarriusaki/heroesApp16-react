import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { getHeroByPublisher } from '../helpers/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroLIst = ({ publisher }) => {
  const { data, isLoading } = useFetch(`http://localhost:8080/hero/heroes/${publisher}`)
  const heroes = getHeroByPublisher(publisher);
  console.log(data,'kkkkk');
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
          (data) ?
          data.map(hero => (
              <HeroCard key={hero.idd} {...hero}/>
          ))
          :null
        }
    </div>
  )
}
