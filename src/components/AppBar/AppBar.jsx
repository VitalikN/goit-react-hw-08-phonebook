import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
};
