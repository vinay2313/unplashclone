import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import PhotoBox from './PhotoBox'

function PhotosContainer() {
 
  const {photos} = useContext(GlobalContext)
 
  return (
    <div className="photos-container">
        {
          photos.map((photo)=>
          <PhotoBox key={photo.id} photo={photo}/>
          )
        }
      </div>
  )
}

export default PhotosContainer