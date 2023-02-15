import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';

import {
  TextField,
  Paper,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem
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
  };

  const onSelectChange = (event: SelectChangeEvent<boolean>) => {
    const { name } = event.target;
    let value: boolean = false;
    if (event.target.value === 'true') {
      value = true;
    }

    setUser({ ...user, [name]: value });
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

            <FormControl>
              <InputLabel>Access</InputLabel>
              <Select
                labelId='access'
                name='access'
                id='access'
                size='small'
                label='Access'
                value={user.access}
                onChange={onSelectChange}
              >
                <MenuItem value='' />
                <MenuItem value='true'>True</MenuItem>
                <MenuItem value='false'>False</MenuItem>
              </Select>
            </FormControl>

            <Button startIcon={<AddIcon />} variant='outlined' onClick={onClick}>
              Add
            </Button>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
