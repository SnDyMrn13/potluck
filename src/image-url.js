
const imageUrl = ({photo, width, height, sat}) =>
   "https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&q=80&auto=format&fit=crop"
   
 export default imageUrl   
