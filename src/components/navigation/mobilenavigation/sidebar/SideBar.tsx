import React from 'react'
import './SideBar.css';

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: (value:boolean) => void}) => {
  return (
    <div className={props.drawerIsOpen ? 'side-drawer open':'side-drawer'}>
            <button onClick={() => { props.drawerHandler(false); }} >HEJ</button>
    
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}
