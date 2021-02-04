import { useState, useContext } from 'react';
import { ILoginCredentials } from '../shared/interface/interface';
import { useHistory } from 'react-router-dom';
import RoutingPath from '../routes/RoutingPath';
import {UserContext} from '../shared/provider/UserProvider';

export const SignInView = () => {
  const history = useHistory();
  const [loginCredentials, setloginCredentials] = useState<ILoginCredentials>({ username: '', password: '' });
  const [authUser, setAuthUser] = useContext(UserContext);

  const signIn = () => {
    localStorage.setItem('user', loginCredentials.username);
    setAuthUser(loginCredentials);
    
    history.push(RoutingPath.homeView);
  }

  return (
    <div>
      Sign in
      <pre>{JSON.stringify(loginCredentials, null, ' ')}</pre>
      <form>
        <input placeholder="Username"
          onChange={(e) => setloginCredentials({ ...loginCredentials, username: e.target.value })} /
        ><br />
        <input placeholder="Password"
          onChange={(e) => setloginCredentials({ ...loginCredentials, password: e.target.value })} /><br />
        <button onClick={signIn}>Sign in</button>
      </form>
    </div>
  )
}
