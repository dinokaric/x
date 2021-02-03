import './DesktopNavigation.css';
import Logotype from '../../../images/logotype.svg';
import { useHistory } from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';

export const DesktopNavigation = () => {
  const history = useHistory();
  return (
    <div className="desktopNavigationWrapper">
      <img className="navigationLogotype"
        src={Logotype}
        alt={'Logotype'} />
        <span onClick={() => history.push(RoutingPath.homeView)}>Products</span>
        <span onClick={() => history.push(RoutingPath.aboutView)}>Brands</span>
        <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
        <span onClick={() => history.push(RoutingPath.homeView)}>Guidelines</span>
        <span onClick={() => history.push(RoutingPath.signInView)}>Signin</span>
    </div>
  )
}
