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
        minHeight: { md: '150px', xs: '100px' },
        minWidth: { md: '350px', xs: '270px' },
        marginTop: '12px',
        padding: { md: '10px 20px', xs: '5px' },
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
          sx={{ fontSize: { md: '13px', xs: '11px' }, fontWeight: 'bold' }}
        >
          {id}
        </Typography>
        <Typography
          variant='subtitle1'
          component='div'
          gutterBottom
          fontSize={{ md: '13px', xs: '11px' }}
        >
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography
          variant='subtitle1'
          component='div'
          gutterBottom
          fontSize={{ md: '13px', xs: '11px' }}
        >
          {email}
        </Typography>
        <Typography
          variant='subtitle1'
          component='div'
          gutterBottom
          fontSize={{ md: '13px', xs: '11px' }}
        >
          {birthDate}
        </Typography>
        <Typography
          variant='subtitle1'
          component='div'
          gutterBottom
          fontSize={{ md: '13px', xs: '11px' }}
        >
          {access ? <AllowedIcon /> : <DeniedIcon />}
        </Typography>
      </Box>
      <Stack spacing={{ md: 10, xs: 5 }} direction='column'>
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
