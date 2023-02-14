interface IUser {
  id?: number;
  email: string;
  access: boolean;
  lastName: string;
  birthDate: string;
  firstName: string;
}

interface IUsersContextProps {
  users: IUser[];
  filters: string[];
  userIdForEdit: number | null;
  getUsersList: () => void;
  addUser: ({ email, access, lastName, birthDate, firstName }: IUser) => void;
  deleteUser: (id: IUser['id']) => void;
  editUser: ({ email, access, lastName, birthDate, firstName }: Omit<IUser, 'id'>) => void;
  selectUserForEdit: (id: IUser['id']) => void;
  activeFilter: string;
  changeActiveFilter: (string) => void;
}

interface IStoreProviderProps {
  children: React.ReactNode;
}

interface IEditUserPanelProps {
  changingUser: IUser;
}
