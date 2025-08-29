import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const image = () => {
    const { imageData } = useContext(PixabayContext);

  return (
    <div className ="container_my-5" >
    <div className ='flex'>
        {imageData.map((image) =>(
            <div key ={image.id} >
                <div className='item'>
                    <img src = {image.largeImageURL} alt='ashish' />
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default image