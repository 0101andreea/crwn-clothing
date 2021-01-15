import React from 'react';
//a function that takes a component as an argument and returns a modified component; 
import {withRouter} from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    //className will be equal with size, witch is a state property fort the last 2 objects
    //history match basic navigation setup
  <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);


