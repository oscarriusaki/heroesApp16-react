import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { HeroLIst } from '../components/HeroLIst'

export const MarvelPage = () => {

  return (
    <>
        <h1>Marvel Page</h1>
        <hr />
        <HeroLIst publisher={'Marvel Comics'} />
    </>
  )
}
