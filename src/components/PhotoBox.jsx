import React from 'react'
import { Link } from 'react-router-dom'

function PhotoBox({photo}) {
  
  const {id , urls} = photo
  
  return (
    <Link to={`/single-photo/${id}`}>
    <div className="photo-box">
    <img src={urls.full} alt="" />
    </div>
    </Link>
  )
}

export default PhotoBox