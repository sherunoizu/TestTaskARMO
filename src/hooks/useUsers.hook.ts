import { useContext } from 'react';

import { UsersContext } from '../context/users.context';

export const useUsers = () => useContext(UsersContext);
