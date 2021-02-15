import React from "react";
import "./SideBar.css";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../../routes/RoutingPath";

export const SideBar = (props: { drawerIsOpen: boolean; drawerHandler: (value: boolean) => void; }) => {
  const history = useHistory();

  const handleNavigation = (route: string) => {
    props.drawerHandler(false);
    history.push(route);
  }

  return (
    <div className={props.drawerIsOpen ? "side-drawer open" : "side-drawer"}>
      <button
        onClick={() => {
          props.drawerHandler(false);
        }}
      >
        HEJ
      </button>

      <ul>
        <li onClick={() => handleNavigation(RoutingPath.shopView)}>Butik</li>
        <li onClick={() => handleNavigation(RoutingPath.accessoriesView)}>
          Accessoarer
        </li>
        <li onClick={() => handleNavigation(RoutingPath.brandsView)}>Varumärken</li>
        <li onClick={() => handleNavigation(RoutingPath.newsView)}>Nyheter</li>
        <li onClick={() => handleNavigation(RoutingPath.expertiseView)}>
          Expertis
        </li>
      </ul>
    </div>
  );
};
