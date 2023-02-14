import React, { ChangeEvent, useEffect, useState } from 'react';

import { Box, Grid, Pagination } from '@mui/material';

import { UserTableItem } from './UserTableItem/user-table-item.component';

import { EditPanel } from '../EditPanel/edit-panel.component';

import { usePagination } from '../../utils';

import { useUsers } from '../../context';

export const UserTable = () => {
  const { users, getUsersList, userIdForEdit } = useUsers();
  const [page, setPage] = useState(1);
  const PAGE_LIMIT = 10;

  const count = Math.ceil(users.length / PAGE_LIMIT);
  const DATA = usePagination(users, PAGE_LIMIT);

  const onChangeHandler = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    DATA.jump(page);
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <Box>
      <Pagination
        count={count}
        page={page}
        onChange={onChangeHandler}
        variant='outlined'
        color='primary'
        shape='rounded'
        sx={{
          '&.MuiPagination-root': {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
          }
        }}
      />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 6 }}>
        {DATA.currentData().map((user) => {
          const { id, email, access, lastName, birthDate, firstName } = user;

          return id === userIdForEdit ? (
            <Grid item xs={6} key={id}>
              <EditPanel key={id} changingUser={user} />
            </Grid>
          ) : (
            <Grid item xs={6} key={id}>
              <UserTableItem
                id={id}
                email={email}
                access={access}
                lastName={lastName}
                birthDate={birthDate}
                firstName={firstName}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
