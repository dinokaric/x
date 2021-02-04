import { UserContext} from '../../shared/provider/UserProvider';
import { useContext } from 'react';
import ProfileImage from '../../images/profileimage.jpg';

export const Profile = () => {
  const [authUser] = useContext(UserContext);

  return (
    <div>
      <img src={'https://thispersondoesnotexist.com/image'} alt={'Profile image'} style={{width:'90px'}}></img>
      {authUser.username}
    </div>
  )
}
