import { UserContext} from '../../shared/provider/UserProvider';
import { useContext } from 'react';
import { ProfileDropDown } from './profiledropdown/ProfileDropDown';
import './Profile.css';

export const Profile = () => {
  const [authUser] = useContext(UserContext);

  return (
    <div className="profileWrapper" >
      <img src={'https://thispersondoesnotexist.com/image'} alt={'Profile'} className='profileImg'></img>
      {authUser.username}
      <ProfileDropDown />
    </div>
  )
}
