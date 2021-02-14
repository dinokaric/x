import { HamburgerButton } from './hamburgerbutton/HamburgerButton';
import './MobileNavigation.css';
import { SideBar } from './sidebar/SideBar';
import {useState} from 'react';

export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  return (
    <div>
      <HamburgerButton drawerHandler={setOpenDrawer} />

      <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
    </div>
  )
}
