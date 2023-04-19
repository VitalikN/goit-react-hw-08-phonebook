import PropTypes from 'prop-types';
import { removeContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Box, Button, ListItem, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(removeContact(contactId));
  };
  const { id, name, number } = contact;
  return (
    <ListItem
      key={id}
      sx={{
        pb: 0,
        paddingX: 0,
        display: { xs: 'flex' },
        flexDirection: 'column',
      }}
    >
      <Box
        component="div"
        sx={{ display: { xs: 'flex' }, alignItems: 'center', width: '100%' }}
      >
        <Box
          component="div"
          sx={{
            display: { xs: 'flex' },
            flexWrap: 'wrap',
            flexGrow: 1,
          }}
        >
          <Typography variant="span" sx={{ mr: 1, flexGrow: 1 }}>
            {name}
          </Typography>
          <Typography variant="span" sx={{ mr: 1 }}>
            {number}
          </Typography>
        </Box>
        <Button type="button" onClick={() => handleDelete(contact.id)}>
          <ClearIcon color="secondary" />
        </Button>
      </Box>
    </ListItem>
  );
};
ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
