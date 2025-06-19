'use client';

import { MouseEvent, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  Container,
  Box,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { useAppSelector } from '../../../lib/hooks';

const pages = [
  {
    title: 'Home',
    url: '/',
  },
  { title: 'Orders', url: '/orders' },
  { title: 'Orders By Page', url: '/ordersByPage' },
];

const styles = {
  logoIcon: {
    display: { xs: 'none', md: 'flex' },
    mr: 1,
  },
  logoText: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  mobileMenuBox: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  mobileMenu: {
    display: { xs: 'block', md: 'none' },
  },
  mobileLogoIcon: {
    display: { xs: 'flex', md: 'none' },
    mr: 1,
  },
  mobileLogoText: {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  desktopMenuBox: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
  },
  userMenuBox: {
    flexGrow: 0,
  },
  userMenu: {
    mt: '45px',
  },
  linkStyle: {
    color: '#fff',
  },
};

function Header() {
  const selectedOrders = useAppSelector((store) => store.selectedOrders);

  console.log('HEADER RENDER');

  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={styles.logoIcon} />
          <Typography variant="h6" noWrap component="a" href="/" sx={styles.logoText}>
            LOGO
          </Typography>

          <Box sx={styles.mobileMenuBox}>
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
              sx={styles.mobileMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                  <Link href={page.url}>{page.title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={styles.mobileLogoIcon} />
          <Typography variant="h5" noWrap component="a" href="" sx={styles.mobileLogoText}>
            LOGO
          </Typography>
          <Box sx={styles.desktopMenuBox}>
            {pages.map((page) => (
              <Button key={page.url}>
                <Link href={page.url} onClick={handleCloseNavMenu} style={styles.linkStyle}>
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>

          <Typography sx={{ pr: '20px' }}>Selected: {selectedOrders.length || 0}</Typography>

          <Box sx={styles.userMenuBox}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={styles.userMenu}
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
              {selectedOrders.map((order) => (
                <Typography component="p" sx={{ width: '300px' }} key={order.id} textAlign="center">
                  {order.id}
                </Typography>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
