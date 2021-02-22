import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { HomeView } from '../view/HomeView';
import { SignInView } from '../view/SignInView';
import { UserContext } from '../shared/provider/UserProvider';
import { useEffect, useContext } from 'react';

import RoutingPath from './RoutingPath';
import { AccessoriesView } from '../view/navigationtabviews/accessories/AccessoriesView';
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView';
import { ExpertiseView } from '../view/navigationtabviews/expertise/ExpertiseView';
import { NewsView } from '../view/navigationtabviews/news/NewsView';
import { ShopView } from '../view/navigationtabviews/shop/ShopView';
import { SettingsView } from '../view/authenticatedviews/SettingsView';

export const Routes = ({ children }: { children: React.ReactChild }) => {
  const [authUser, setAuthUser] = useContext(UserContext);


  const blockRouteIfAuthenticated = (allowedView: React.FC, notAllowedView: React.FC) => {
    return (!authUser) ? allowedView : notAllowedView;
  }

  const authenticationRequired = (allowedView: React.FC, notAllowedView: React.FC) => {
    return authUser ? allowedView : notAllowedView;
  }

  useEffect(() => {
    if (!authUser && localStorage.getItem('user')){
      setAuthUser({username: localStorage.getItem('user')});
    }
  });

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView, HomeView)} />
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
        <Route exact path={RoutingPath.brandsView} component={BrandsView} />
        <Route exact path={RoutingPath.expertiseView} component={ExpertiseView} />
        <Route exact path={RoutingPath.newsView} component={NewsView} />
        <Route exact path={RoutingPath.shopView} component={ShopView} />
        <Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView, SignInView)} />
        <Route component={HomeView}></Route>
      </Switch>
    </BrowserRouter>
  );
}