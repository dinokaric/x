
import BackendAPIService from '../../../shared/api/service/BackendAPIService';
import {useState,useEffect} from 'react';
import { ICreateNewUser } from '../../../shared/interface/interface';

export const NewsView = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState<ICreateNewUser>({
    username: 'test',
    password:'test'
  });

  const create = async() => {
    try {
      setLoading(true);
      await BackendAPIService.createUser(newUser);
      setLoading(false);
    } catch (error){
      console.log(error);
    }
  }

  const fetchData = async() => {
    const response = await BackendAPIService.getAllUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    fetchData();
  },[loading]);

  return (
    <div>
      <h1>Backend API:</h1>
      <p>Username</p>
      <input onChange={(event) => { setNewUser({...newUser, username: event.target.value})}} /><br/>
      <p>Password</p>
      <input /><br/>
      <p>Age</p>
      <input /><br/>
      <button onClick={ () => create() } >Create user</button>
      <hr />
      <h1>Displaying all users: </h1>
      {users.map((x:any) => <div><span>{x.username}</span></div>)}

    </div>
  )
}
