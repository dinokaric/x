import React from 'react'
import './BackDrop.css';

export const BackDrop = (props: {drawerHandler: (val:boolean) => void}) => {
  return (
    <div onClick={ () => { props.drawerHandler(false);} } className='backdrop'>
      
    </div>
  )
}
