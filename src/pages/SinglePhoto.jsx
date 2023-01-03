import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePhoto() {
 
 const params = useParams()
 
 const [photo , setPhoto] = useState("")

 const getPhoto = async () => {
  const res = await fetch(`https://api.unsplash.com/photos/${params.id}/?client_id=R_q4w0hjRlfLt5ROoYkjOI2VKGLhnYHBYW7NSHRdjUI`)
  const data = await res.json()
  setPhoto(data.urls.full)
 }

 useEffect(()=>{
  getPhoto()
 },[])

 if(!photo){
  return (
    <h1>Loading...</h1>
  )
 }  else{
  return (

    <div className="big-photo-container">
      <div className="big-photo">
        <img src={photo} alt="" />
      </div>
      <div className="download-section">
        <button className="download-btn">Download Now</button>
      </div>
    </div>
  )
 }
}

export default SinglePhoto