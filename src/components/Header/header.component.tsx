import React from 'react';

import { Box, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

// import { Add as AddIcon } from '@mui/icons-material';
import { AddingPanel } from '../AddingPanel/adding-panel.component';

import { useUsers } from '../../context';

export const Header = () => {
  const { filters, activeFilter, changeActiveFilter } = useUsers();

  const onChangeHandler = (event: SelectChangeEvent) => {
    changeActiveFilter(event.target.value);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='10px'
      width={{md: '400px', xs: '250px'}}
      sx={{ p: 2, border: '1px dashed grey', borderRadius: 2 }}
    >
      <Typography
        variant='h1'
        component='h1'
        gutterBottom
        sx={{ fontSize: '31px', fontWeight: 'bold' }}
      >
        ARMO-users
      </Typography>
      <AddingPanel />

      <Box>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id='filter-label'>Filter</InputLabel>
          <Select
            labelId='filter-label'
            value={activeFilter}
            label='Filter'
            onChange={onChangeHandler}
            sx={{ width: '100%' }}
          >
            <MenuItem key={1234124} value='all'>
              unsorted
            </MenuItem>
            {filters.map((filter, i) => (
              <MenuItem key={i} value={filter}>{`by ${filter}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
