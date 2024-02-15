import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Navbar() {
  const { t } = useTranslation('ns1');
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const navbarStyle = {
    backgroundColor: hovered ? '#005A14' : 'rgba(0, 90, 20, 0.7)', // Cambia el color de fondo dependiendo si el mouse está sobre el navbar o no
    transition: 'background-color 0.3s', // Añade una transición suave para el cambio de color de fondo
  };

  const buttonStyle = { my: 2, color: 'white', display: 'block', fontSize: 16 };
  

  return (
    <AppBar position="static" sx={navbarStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent:'space-evenly', paddingTop: '15px', paddingBottom: '15px'}}>
              <Button
                sx={buttonStyle}
              >
                {t('navbar.home')}
              </Button>
              <Button
                sx={buttonStyle}
              >
                {t('navbar.about_us')}
              </Button>
              <Button
                sx={buttonStyle}
              >
                {t('navbar.contact')}
              </Button>
              <Button
                sx={buttonStyle}
              >
                {t('navbar.news')}
              </Button>
              <Button
                sx={buttonStyle}
              >
                {t('navbar.sports')}
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
