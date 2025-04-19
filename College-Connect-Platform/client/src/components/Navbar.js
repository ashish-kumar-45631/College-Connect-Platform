import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import {
  CalendarMonth,
  Groups,
  Person,
  Star,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            College Connect
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/events"
              startIcon={<CalendarMonth />}
            >
              Events
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/clubs"
              startIcon={<Groups />}
            >
              Clubs
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/features"
              startIcon={<Star />}
            >
              Features
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/profile"
              startIcon={<Person />}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/login"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 