import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  Box,
  Paper,
  Chip,
} from '@mui/material';

const ClubCard = ({ name, description, category, logo, contactEmail }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      height="140"
      image={logo || 'https://via.placeholder.com/300x140'}
      alt={name}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Chip
        label={category}
        size="small"
        color="primary"
        sx={{ mb: 2 }}
      />
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Contact: {contactEmail}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
      <Button size="small" color="primary">
        Join Club
      </Button>
    </CardActions>
  </Card>
);

const Clubs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock data - replace with actual API calls
  const clubs = [
    {
      id: 1,
      name: 'Computer Science Club',
      description: 'A community of tech enthusiasts exploring the world of computer science.',
      category: 'Academic',
      logo: 'https://via.placeholder.com/300x140',
      contactEmail: 'csclub@college.edu',
    },
    {
      id: 2,
      name: 'Art Society',
      description: 'Promoting artistic expression and creativity on campus.',
      category: 'Arts',
      logo: 'https://via.placeholder.com/300x140',
      contactEmail: 'artsociety@college.edu',
    },
    // Add more mock clubs as needed
  ];

  const categories = ['All', 'Academic', 'Arts', 'Sports', 'Cultural', 'Social'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Club Directory
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Clubs"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? 'primary' : 'default'}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        {clubs.map((club) => (
          <Grid item key={club.id} xs={12} sm={6} md={4}>
            <ClubCard {...club} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clubs; 