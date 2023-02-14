import React, { useState, useMemo } from 'react';

import { useUserService } from '../services/users.service';
import { UsersContext } from './users.context';

const DEFAULT_USERS_LIST = [
  {
    id: 1234,
    email: 'email',
    access: true,
    lastName: 'Last',
    birthDate: '11.11.2011',
    firstName: 'First'
  }
];

const DEFAULT_FILTERS_LIST = ['all'];

export const UsersProvider: React.FC<IStoreProviderProps> = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState('');
  const [userIdForEdit, setUserIdForEdit] = useState<number | null>(null);
  const [users, setUsers] = useState(DEFAULT_USERS_LIST);
  const [filters, setFilters] = useState(DEFAULT_FILTERS_LIST);

  const { getAllUsers } = useUserService();

  const getUsersList = () =>
    getAllUsers().then((res) => {
      setUsers(res.data);
      setFilters(Object.keys(res.data[0]));
    });

  const filterByField = (field: string) => {
    const filterTemp = (field: string) => {
      if (field) {
        return (a: IUser, b: IUser) =>
          (a[field as keyof IUser] || '') > (b[field as keyof IUser] || '') ? 1 : -1;
      }
    };

    const temp = [...users].sort(filterTemp(field));

    setUsers(temp);
  };

  const changeActiveFilter = (filterToChange: string) => {
    setActiveFilter(filterToChange);

    filterByField(filterToChange);
  };

  const addUser = ({ id, email, access, lastName, birthDate, firstName }: IUser) => {
    if (id) {
      setUsers([...users, { id, email, access, lastName, firstName, birthDate }]);
    }
  };

  const deleteUser = (id: IUser['id']) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = ({ id, email, access, lastName, birthDate, firstName }: IUser) => {
    if (id) {
      setUsers(
        users.map((user) => {
          if (user.id === userIdForEdit) {
            return { ...user, id, email, access, lastName, birthDate, firstName };
          }
          return user;
        })
      );
    }

    setUserIdForEdit(null);
  };

  const selectUserForEdit = (id: IUser['id']) => {
    if (id) {
      setUserIdForEdit(id);
    }
  };

  const value = useMemo(
    () => ({
      users,
      filters,
      userIdForEdit,
      selectUserForEdit,
      getUsersList,
      addUser,
      deleteUser,
      editUser,
      activeFilter,
      changeActiveFilter
    }),
    [users, userIdForEdit, deleteUser, editUser, addUser, selectUserForEdit]
  );

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};
