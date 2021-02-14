import {useContext} from "react";
import "./ProfileDropDown.css";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../shared/provider/UserProvider';
import RoutingPath from '../../../routes/RoutingPath';


export const ProfileDropDown = () => {
  const history = useHistory();

  const [authUser, setAuthUser] = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('user');
    setAuthUser(null);
    history.push(RoutingPath.homeView);
  }
  
  return (
    <div className="profileDropdown">
      <span>Alternativ 1</span>
      <span>Alternativ 2</span>
      <span>Alternativ 3</span>
      <span onClick={logout}>Sign Out</span>
    </div>
  );
}
