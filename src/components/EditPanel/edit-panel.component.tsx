import React, { useState } from 'react';
import { Edit as EditIcon } from '@mui/icons-material';

import {
  TextField,
  Paper,
  Button,
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

export const EditPanel: React.FC<IEditUserPanelProps> = ({ changingUser }) => {
  const { editUser } = useUsers();

  const [user, setUser] = useState(changingUser);

  const onClick = () => editUser(user);

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
        gap: 2,
        bgcolor: 'teal'
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          {`Edit item ${user.id}`}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
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
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            <TextField
              value={user.id}
              onChange={onChange}
              name='id'
              label='ID'
              sx={{ width: '100%' }}
            />
            <TextField
              sx={{ width: '100%' }}
              value={user.firstName}
              onChange={onChange}
              name='firstName'
              label='First Name'
            />
            <TextField
              sx={{ width: '100%' }}
              value={user.lastName}
              onChange={onChange}
              name='lastName'
              label='Last Name'
            />
            <TextField
              sx={{ width: '100%' }}
              value={user.birthDate}
              onChange={onChange}
              name='birthDate'
              label='Birth Date'
            />
            <TextField
              sx={{ width: '100%' }}
              value={user.email}
              onChange={onChange}
              name='email'
              label='Email'
            />
            <FormControl sx={{ width: '100%' }}>
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
          </Paper>
          <Button
            startIcon={<EditIcon />}
            variant='outlined'
            onClick={onClick}
            sx={{ marginTop: '15px' }}
          >
            Edit
          </Button>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
