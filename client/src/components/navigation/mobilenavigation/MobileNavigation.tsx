import { HamburgerButton } from './hamburgerbutton/HamburgerButton';
import './MobileNavigation.css';
import { SideBar } from './sidebar/SideBar';
import {useState} from 'react';
import { BackDrop } from './sidebar/BackDrop';

export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div>
      <HamburgerButton drawerHandler={setOpenDrawer} />

      <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
      {openDrawer && <BackDrop drawerHandler={setOpenDrawer}  />}
    </div>
  )
}
