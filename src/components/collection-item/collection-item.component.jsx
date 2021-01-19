import React from 'react'

import './collection-item.styles.scss'


//get props from shop-data
const CollectionItem = ({id, name, price, imageUrl}) => (

    <div className='collection-item'>
        
     <div 
        className='image'
        style = {{
            //interpolation string value $ 
            backgroundImage: `url(${imageUrl})`
        }}
     />
     <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
     </div>
    </div>
)

export default CollectionItem