import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView';
import { AboutView } from '../view/AboutView';
import { SignInView } from '../view/SignInView';
import RoutingPath from './RoutingPath';

export const Routes = ({ children }: { children: React.ReactChild }) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route component={HomeView}></Route>
      </Switch>
    </BrowserRouter>
  );
}