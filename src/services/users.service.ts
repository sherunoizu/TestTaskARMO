import axios from 'axios';

export const useUserService = () => {
  const apiBase = 'https://retoolapi.dev';
  const apiDB = 'TGuHPX';

  const getAllUsersOnPage = async (limit = 10, page = 1) => {
    const response = await axios.get(`${apiBase}/${apiDB}/users`, {
      params: {
        _limit: limit,
        _page: page
      }
    });
    return response;
  };

  const getAllUsers = async () => {
    const response = await axios.get(`${apiBase}/${apiDB}/users`);
    return response;
  };

  const addUser = async (user: IUser) => {
    const response = await axios.post(`${apiBase}/${apiDB}/users`, user);
    return response;
  };

  const editUser = async (user: IUser) => {
    const response = await axios.put(`${apiBase}/${apiDB}/users/${user.id}`, user);
    return response;
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`${apiBase}/${apiDB}/users/${id}`);
  };

  return {
    getAllUsersOnPage,
    getAllUsers,
    addUser,
    editUser,
    deleteUser
  };
};
