import { UserContext} from '../../shared/provider/UserProvider';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileDropDown } from './profiledropdown/ProfileDropDown';
import './Profile.css';

export const Profile = () => {
  const [authUser] = useContext(UserContext);

  return (
    <div className="profileWrapper" >
      <img src={'https://thispersondoesnotexist.com/image'} alt={'Profile image'} className='profileImg'></img>
      {authUser.username}
      <ProfileDropDown />
    </div>
  )
}
