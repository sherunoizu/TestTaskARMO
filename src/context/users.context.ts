import { createContext } from 'react';

export const UsersContext = createContext<IUsersContextProps>({
  users: [],
  filters: [],
  userIdForEdit: null,
  getUsersList: () => {},
  addUser: () => {},
  deleteUser: () => {},
  editUser: () => {},
  selectUserForEdit: () => {},
  activeFilter: '',
  changeActiveFilter: () => {}
});
