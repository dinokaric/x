import http from '../BackendAPI';
import { ICreateNewUser } from '../../interface/interface';

const createUser = (data: ICreateNewUser) => {
  return http.post('/user', data);
}


const getAllUsers = () => {
  return http.get("/user");
}

export default {
  createUser,
  getAllUsers
}