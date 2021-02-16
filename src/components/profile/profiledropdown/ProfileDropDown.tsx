import {useContext} from "react";
import "./ProfileDropDown.css";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../shared/provider/UserProvider';
import RoutingPath from '../../../routes/RoutingPath';


export const ProfileDropDown = () => {
  const history = useHistory();

  const [, setAuthUser] = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('user');
    setAuthUser(null);
    history.push(RoutingPath.homeView);
  }
  
  return (
    <div className="profileDropdown">
      <span onClick={()=>history.push(RoutingPath.settingsView)}>Settings</span>
      <span onClick={logout}>Sign Out</span>
    </div>
  );
}
