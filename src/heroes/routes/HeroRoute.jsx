import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { MarvelPage, DcPage, SearchPage, HeroePage, RegisterHero } from '../pages'

export const HeroRoute = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<MarvelPage /> } />    
            <Route path='/dc' element={<DcPage /> } />  
            <Route path='/search' element={<SearchPage /> } />  
            <Route path='/hero/:id' element={<HeroePage /> } /> 
            <Route path='/registerHero' element={<RegisterHero /> } />  
            <Route path='/*' element={<Navigate to='/' /> } />
        </Routes>
    </>
  )
}
