import React from 'react';

import { IconButton, Typography, Box, Paper, Stack } from '@mui/material';

import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Check as AllowedIcon,
  DoDisturb as DeniedIcon
} from '@mui/icons-material';

import { useUsers } from '../../../context';

export const UserTableItem: React.FC<IUser> = ({
  id,
  email,
  access,
  lastName,
  birthDate,
  firstName
}) => {
  const { deleteUser, selectUserForEdit } = useUsers();

  return (
    <Paper
      elevation={3}
      sx={{
        minHeight: '150px',
        minWidth: '350px',
        marginTop: '12px',
        marginLeft: '10px',
        padding: '10px 20px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 2
      }}
    >
      <Box textAlign='left'>
        <Typography
          variant='h6'
          component='h6'
          gutterBottom
          sx={{ cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}
        >
          {id}
        </Typography>
        <Typography variant='subtitle1' component='div' gutterBottom>
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant='subtitle1' component='div' gutterBottom>
          {email}
        </Typography>
        <Typography variant='subtitle1' component='div' gutterBottom>
          {birthDate}
        </Typography>
        <Typography variant='subtitle1' component='div' gutterBottom>
          {access ? <AllowedIcon /> : <DeniedIcon />}
        </Typography>
      </Box>
      <Stack spacing={10} direction='column'>
        <IconButton onClick={() => selectUserForEdit(id)} color='primary' aria-label='delete'>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteUser(id)} color='error' aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};
