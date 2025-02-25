import React from 'react'

function Favorite({onAddFavorite,movie}) {
  return (
<>
<div>Favorites</div>
<button className='bg-white text-red-600'  onClick={() => onAddFavorite(movie)}
>add</button>
</>
  )
}

export default Favorite 
