import { useState, createContext } from 'react';

export const UserContext = createContext<any>(null);

export const UserProvider = ({children} : {children: React.ReactChild}) => {
  const [authUser, setAuthUser] = useState(); 

  return (
    <UserContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </UserContext.Provider>
  )
}
