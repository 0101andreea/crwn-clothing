import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    //className will be equal with size, witch is a state property fort the last 2 objects
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})` //make dynamically styles on components ; add a js element to as style property
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;


