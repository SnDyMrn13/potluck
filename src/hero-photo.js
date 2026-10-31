
import imageUrl from './image-url.js'


const heroPhoto = ({photo, width, height, description}) =>{
const src = imageUrl ({photo, width, height}) 
const alt = description
 return {src, alt}
}

export default heroPhoto