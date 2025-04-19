import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Paper,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const EventCard = ({ title, date, location, description, club }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {new Date(date).toLocaleDateString()} • {location}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Hosted by: {club}
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
        Register
      </Button>
    </CardActions>
  </Card>
);

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API calls
  const events = [
    {
      id: 1,
      title: 'Tech Talk: Web Development',
      date: '2024-03-15',
      location: 'Computer Science Building',
      description: 'Join us for an exciting talk about modern web development practices.',
      club: 'Computer Science Club',
    },
    {
      id: 2,
      title: 'Art Exhibition',
      date: '2024-03-20',
      location: 'Art Gallery',
      description: 'Annual student art exhibition showcasing creative works.',
      club: 'Art Society',
    },
    // Add more mock events as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Events Calendar
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Events"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Events; 