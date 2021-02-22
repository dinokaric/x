import './DesktopNavigation.css';
import Logotype from '../../../images/logotype.svg';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../shared/provider/UserProvider';
import RoutingPath from '../../../routes/RoutingPath';
import {Profile} from '../../profile/Profile';
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs';



export const DesktopNavigation = () => {
  const history = useHistory();
  const [authUser, ] = useContext(UserContext);

  function displaySignInOrUsername() {
    return authUser 
      ? <div className='profile'><Profile  /></div>
      : <span onClick={() => history.push(RoutingPath.signInView)} className='signInButton'>Sign in</span>
  }

  return (
    <div className="desktopNavigationWrapper">
      <img className="navigationLogotype"
        src={Logotype}
        alt={'Logotype'} />

      <div className='desktopNavigationTabs'>
        <DesktopNavigationTabs />
      </div>
      {/* <span onClick={() => history.push(RoutingPath.signInView)}>{authUser?.username || 'Sign in'}</span> */}
      {displaySignInOrUsername()}
    </div>
  )
}
