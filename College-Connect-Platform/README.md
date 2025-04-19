# College Connect Platform

A web-based platform designed to connect students, clubs, and organizations within a college community. The platform provides a centralized hub for all college activities, events, and opportunities, promoting student engagement, community building, and efficient management.

## Features

- **Event Calendar**: Discover and attend events from various clubs and organizations
- **Club Directory**: Explore all clubs and organizations in one place
- **Student Profile**: Showcase your interests, skills, and involvement
- **Smart Notifications**: Stay updated with important announcements
- **Advanced Search**: Find clubs and events that match your interests
- **Team Management**: Efficiently manage club memberships and communication

## Tech Stack

### Frontend
- React.js
- Material-UI
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/college-connect-platform.git
cd college-connect-platform
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development servers:
```bash
# From the root directory
npm run dev:full
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
college-connect-platform/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/         # Page components
│       ├── services/      # API services
│       └── utils/         # Utility functions
├── models/                # MongoDB models
├── routes/               # API routes
├── server.js             # Express server
└── package.json          # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the component library
- React community for the amazing ecosystem
- All contributors who help improve this project 