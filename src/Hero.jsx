
import {useState} from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'


function Hero () {
  const photo = {id:"photo-1647299852591-3d064c267099", description: "potluck dinner"}
  const {id, description} = photo
  const {src, alt} = heroPhoto ({
    photo:id,
    width:400,
    height:400,
    description
  })
   
   return(
      <div className = "hero">
        <img src = {src} alt = {alt}/>
    
        <h6>Photo by Richard Bell on Unsplash, CC0</h6>
      </div> 
   )
   
}


export default Hero