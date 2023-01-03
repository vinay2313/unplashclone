import React, { useContext , useEffect } from 'react'
import PhotosContainer from '../components/PhotosContainer'
import GlobalContext from '../context/GlobalContext'

function Home() {
 
 const {getData} =  useContext(GlobalContext)

  useEffect(()=>{
    getData()
  },[])
 
  return (
    <>
    <PhotosContainer />
    </>
  )
}

export default Home