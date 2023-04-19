import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'components/hooks/userAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import LogoutIcon from '@mui/icons-material/Logout';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{ flexWrap: 'wrap', display: { xs: 'flex' }, mr: 2 }}>
      <Typography variant="h6" sx={{ p: 1 }}>
        Welcome, {user.name.toUpperCase().slice(0, 1) + user.name.slice(1)}
      </Typography>

      <Button color="primary" size="small" onClick={() => dispatch(logOut())}>
        <LogoutIcon size="small" sx={{ color: '#fff' }} />
      </Button>
    </Box>
  );
};
