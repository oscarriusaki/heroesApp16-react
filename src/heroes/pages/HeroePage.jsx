import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

export const HeroePage = async () => {

  // const id = useParams();
  console.log('sss');
  // const [state, setState] = useState({
  // data: null
  // })

  // const resp = await fetch(`http://localhost:8080/hero/${id}`);
  // const d = await resp.json();
  // setState({
  //   ...state,
  //   data:d,
  // });
  // console.log(date,'state')
  
 /*  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  } */

  return (
    <>
      <h1>HeroPage</h1>
      <hr />
      {/* <div className="row">
        <div className="col-md-5">
          <div className="card">
            <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className='img img-thumbnail' />
          </div>
        </div>
        <div className="col-md-7">
          <p> <b> Superhero:</b> {hero.superhero}</p>
          <p> <b> Publisher:</b> {hero.publisher}</p>
          <p> <b> Alter_ego:</b> {hero.alter_ego}</p>
          <p> <b> Alter_ego:</b> {hero.alter_ego}</p>
          {
            (hero.alter_ego !== hero.characters) && (<p><b>Characters:</b>{hero.characters}</p>)
          }
          <p> <b> First_appearance:</b> {hero.first_appearance}</p>
          <button className='btn btn-outline-primary' onClick={back} >Back</button>
        </div>
      </div>     */}
    </>
  )
}
