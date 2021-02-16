import { useState, useContext } from 'react';
import { ILoginCredentials } from '../shared/interface/interface';
import { useHistory } from 'react-router-dom';
import RoutingPath from '../routes/RoutingPath';
import {UserContext} from '../shared/provider/UserProvider';


export const SignInView = () => {
  const history = useHistory();
  const [loginCredentials, setloginCredentials] = useState<ILoginCredentials>({ username: '', password: '' });
  const [, setAuthUser] = useContext(UserContext);

  const updateLoginCredentialsState = (e : React.ChangeEvent<HTMLInputElement>, field: keyof ILoginCredentials) => {
    setloginCredentials({...loginCredentials, [field]: e.target.value });

    /* DEBUG */
    console.info(loginCredentials);
  }

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
          onChange={(e) => updateLoginCredentialsState(e, 'username')} /
        ><br />
        <input placeholder="Password"
          onChange={(e) => updateLoginCredentialsState(e, 'password')} /><br />
        <button onClick={signIn}>Sign in</button>
      </form>
    </div>
  )
}
