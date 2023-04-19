import { Typography } from '@mui/material';
import { FooterStyled } from './Footer.styled';
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
  return (
    <FooterStyled>
      <Typography variant="body1">Disigned by Vitalii Nozhenko</Typography>
      <CopyrightIcon sx={{ display: { md: 'flex' }, ml: 1, mr: 1 }} />
      <Typography variant="body1">GoIT 2023</Typography>
    </FooterStyled>
  );
};
