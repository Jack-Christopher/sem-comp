import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { setPageTitle } from '../../utils/Page';
import Logo from '../UI/Logo';
import { useCookies } from 'react-cookie';

const pages = [
  {
    name: 'Inicio',
    path: '/',
  }, 
  {
    name: 'SemComp',
    path: '/semcomp',
  },
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [cookies, setCookie, removeCookie] = useCookies(['CS-User-Token']);

  const settings = [
    {
      name:'Cuenta',
      function: () => window.location.href = '/account',
    },
    {
      name:'Dashboard',
      function: () => window.location.href = '/dashboard',
    },
    {
      name:'Cerrar sesión',
      function: () => {
        removeCookie('CS-User-Token');
        window.location.href = '/';
      },
    }
  ];

  const userPhotoUrl = "https://st2.depositphotos.com/2703645/11507/v/450/depositphotos_115078626-stock-illustration-man-avatar-character.jpg";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    setPageTitle('Computer Science');
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
          backgroundColor: '#141C25',
        }}
      >
        <Toolbar disableGutters>
          <Logo size={20} className="hidden md:block" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <a href={page.path}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo size={40} className="md:hidden" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { sm: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Computer Science
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => window.location.href = page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {(cookies['CS-User-Token'] === undefined) ? (
                <div className="flex flex-row space-x-3">
                  <Button
                    onClick={() => window.location.href = '/login'}
                    sx={{ 
                      my: 2, 
                      color: 'white',
                      display: 'block', 
                      backgroundColor: '#A0E200',
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => window.location.href = '/register'}
                    sx={{ 
                      my: 2, 
                      color: 'white',
                      display: 'block', 
                      backgroundColor: '#A0E200',
                    }}
                  >
                    Register
                  </Button>
                </div>
              ) : (
                <Tooltip title="Ajustes">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Guest" src={userPhotoUrl} />
                  </IconButton>
                </Tooltip>
              )
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Button
                    onClick={setting.function}
                    sx={{ color: 'black', display: 'block' }}
                  >
                    {setting.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
