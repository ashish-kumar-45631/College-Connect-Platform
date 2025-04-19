import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Avatar,
  Chip,
  Divider,
} from '@mui/material';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@college.edu',
    bio: 'Computer Science student passionate about web development and AI.',
    interests: ['Web Development', 'Artificial Intelligence', 'Data Science'],
    skills: ['JavaScript', 'React', 'Python', 'Machine Learning'],
    clubs: ['Computer Science Club', 'AI Society'],
    events: ['Tech Talk: Web Development', 'AI Workshop'],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // TODO: Implement save profile logic
    setIsEditing(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Avatar
                sx={{ width: 120, height: 120, mb: 2 }}
                src="https://via.placeholder.com/120"
              />
              <Typography variant="h5" gutterBottom>
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.email}
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            {isEditing ? (
              <TextField
                fullWidth
                multiline
                rows={4}
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                sx={{ mb: 3 }}
              />
            ) : (
              <Typography variant="body1" paragraph>
                {profile.bio}
              </Typography>
            )}

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Interests
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {profile.interests.map((interest, index) => (
                <Chip key={index} label={interest} />
              ))}
            </Box>

            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {profile.skills.map((skill, index) => (
                <Chip key={index} label={skill} color="primary" />
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              My Clubs
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {profile.clubs.map((club, index) => (
                <Chip key={index} label={club} variant="outlined" />
              ))}
            </Box>

            <Typography variant="h6" gutterBottom>
              Upcoming Events
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {profile.events.map((event, index) => (
                <Chip key={index} label={event} variant="outlined" color="primary" />
              ))}
            </Box>

            {isEditing && (
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 