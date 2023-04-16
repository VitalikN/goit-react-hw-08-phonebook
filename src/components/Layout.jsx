import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};
