import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from '@mui/material';
import {
  Event,
  Group,
  Notifications,
  Search,
  Person,
  TrendingUp,
  People,
  Speed,
} from '@mui/icons-material';

const FeatureCard = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            color: theme.palette.primary.main,
          }}
        >
          {icon}
          <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ImpactCard = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            color: theme.palette.secondary.main,
          }}
        >
          {icon}
          <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Event fontSize="large" />,
      title: 'Event Calendar',
      description: 'Discover and attend events from various clubs and organizations. Stay updated with upcoming activities and never miss out on opportunities.',
    },
    {
      icon: <Group fontSize="large" />,
      title: 'Club Directory',
      description: 'Explore all clubs and organizations in one place. Find detailed information about each club, their activities, and how to get involved.',
    },
    {
      icon: <Person fontSize="large" />,
      title: 'Student Profile',
      description: 'Create your personal profile to showcase your interests, skills, and involvement in campus activities. Connect with like-minded students.',
    },
    {
      icon: <Notifications fontSize="large" />,
      title: 'Smart Notifications',
      description: 'Receive timely notifications about upcoming events, deadlines, and important updates from your favorite clubs and organizations.',
    },
    {
      icon: <Search fontSize="large" />,
      title: 'Advanced Search',
      description: 'Find exactly what you are looking for with powerful search and filter options. Discover clubs and events that match your interests.',
    },
    {
      icon: <Group fontSize="large" />,
      title: 'Team Management',
      description: 'Efficiently manage club memberships, recruitment, and communication. Streamline administrative tasks and focus on what matters most.',
    },
  ];

  const impacts = [
    {
      icon: <TrendingUp fontSize="large" />,
      title: 'Enhanced Engagement',
      description: 'Increase student participation in campus activities and create a more vibrant college community.',
    },
    {
      icon: <People fontSize="large" />,
      title: 'Stronger Community',
      description: 'Foster meaningful connections between students, clubs, and organizations, building a stronger sense of community.',
    },
    {
      icon: <Speed fontSize="large" />,
      title: 'Efficient Management',
      description: 'Streamline club operations and reduce administrative burdens, allowing more time for meaningful activities.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Features & Impact
      </Typography>

      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mb: 4, color: 'primary.main' }}
      >
        Platform Features
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mb: 4, color: 'secondary.main' }}
      >
        Potential Impact
      </Typography>
      <Grid container spacing={4}>
        {impacts.map((impact, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ImpactCard {...impact} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features; 