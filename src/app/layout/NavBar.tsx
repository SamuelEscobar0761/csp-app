import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useTranslation} from 'react-i18next';


function Navbar() {
  const {t} = useTranslation('ns1');
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('navbar.home')}
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('navbar.about_us')}
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('navbar.contact')}
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('navbar.news')}
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
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
