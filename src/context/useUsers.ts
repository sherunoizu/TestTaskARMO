import { useContext } from 'react';

import { UsersContext } from './users.context';

export const useUsers = () => useContext(UsersContext);
