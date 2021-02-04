import './DesktopNavigation.css';
import Logotype from '../../../images/logotype.svg';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../shared/provider/UserProvider';
import RoutingPath from '../../../routes/RoutingPath';
import {Profile} from '../../profile/Profile';



export const DesktopNavigation = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);

  function displaySignInOrUsername() {
    return authUser 
      ? <Profile />
      : <span onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
  }

  return (
    <div className="desktopNavigationWrapper">
      <img className="navigationLogotype"
        src={Logotype}
        alt={'Logotype'} />
      <span onClick={() => history.push(RoutingPath.homeView)}>Products</span>
      <span onClick={() => history.push(RoutingPath.aboutView)}>Brands</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>Guidelines</span>
      {/* <span onClick={() => history.push(RoutingPath.signInView)}>{authUser?.username || 'Sign in'}</span> */}
      {displaySignInOrUsername()}
    </div>
  )
}
