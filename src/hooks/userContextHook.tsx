import { useContext } from 'react';
import { UserContext } from '../providers/userContext';

const useContextHook = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export default useContextHook;