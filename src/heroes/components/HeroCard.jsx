import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    // id,
    // superhero,
    // publisher,
    // alter_ego,
    // first_appearance,
    // characters,
    alter_ego,
    characterss,
    estado,
    first_appearance,
    id_hero,
    id_user,
    idd,
    originalname,
    publisher,
    routeimage,
    superhero,
    image    

}) => {
  return (
    <>
        <div className="row">
            <div className="col-5">
                <div className="card">
                    <img src={image} alt={superhero} className='img img-thumbnail' />
                </div>
            </div>
            <div className="col-7">
                <p>{superhero}</p>
                <p>{publisher}</p>
                <p>{alter_ego}</p>
                {
                    (alter_ego != characterss) && (<p>{characterss}</p>)
                }
                <p className='text-muted'>{first_appearance}</p>
                <Link to={`/hero/${id_hero}`}>Mas...</Link>
            </div>
        </div>
    </>
  )
}
