import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
} from '@mui/material';
import {
  Event,
  Group,
  Person,
  Notifications,
} from '@mui/icons-material';

const FeatureItem = ({ icon, title, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={3}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 2 }}>{icon}</Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  </Grid>
);

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to College Connect
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Your gateway to campus life and opportunities
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/register"
                sx={{ mr: 2 }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={RouterLink}
                to="/features"
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <FeatureItem
            icon={<Event fontSize="large" />}
            title="Event Calendar"
            description="Discover and attend events from various clubs and organizations"
          />
          <FeatureItem
            icon={<Group fontSize="large" />}
            title="Club Directory"
            description="Explore all clubs and organizations in one place"
          />
          <FeatureItem
            icon={<Person fontSize="large" />}
            title="Student Profile"
            description="Showcase your interests and connect with others"
          />
          <FeatureItem
            icon={<Notifications fontSize="large" />}
            title="Smart Notifications"
            description="Stay updated with important announcements"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 