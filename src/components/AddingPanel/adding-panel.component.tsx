import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';

import {
  TextField,
  Paper,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useUsers } from '../../context';

const DEFAULT_USER = {
  id: 1,
  email: '',
  access: false,
  lastName: '',
  birthDate: '',
  firstName: ''
};

export const AddingPanel = () => {
  const { addUser } = useUsers();

  const [user, setUser] = useState(DEFAULT_USER);

  const onClick = () => {
    addUser(user);
    setUser({ ...DEFAULT_USER, id: user.id + 1 });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          Add new user
        </AccordionSummary>
        <AccordionDetails>
          <Paper
            elevation={0}
            sx={{
              marginTop: '15px',
              width: '100%',
              padding: '0px',
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
              gap: 2,
              flexDirection: 'column',
              flexWrap: 'column'
            }}
          >
            <TextField value={user.id} onChange={onChange} name='id' label='ID' />
            <TextField
              value={user.firstName}
              onChange={onChange}
              name='firstName'
              label='First Name'
            />
            <TextField
              value={user.lastName}
              onChange={onChange}
              name='lastName'
              label='Last Name'
            />
            <TextField
              value={user.birthDate}
              onChange={onChange}
              name='birthDate'
              label='Birth Date'
            />
            <TextField value={user.email} onChange={onChange} name='email' label='Email' />
            <TextField value={user.access} onChange={onChange} name='access' label='Access' />

            <Button
              startIcon={<AddIcon />}
              variant='outlined'
              onClick={onClick}
            >
              Add
            </Button>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
