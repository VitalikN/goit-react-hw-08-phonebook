import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <Box
      component="form"
      marginY={1}
      sx={{
        '& > :not(style)': { m: 1, width: 280 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label="Filter"
        variant="filled"
        color="secondary"
        size="small"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        fullWidth
      />
    </Box>
  );
};
