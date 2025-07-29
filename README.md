# Project Management Blog

A comprehensive project management blog web application built with Node.js, Express, Vue.js 3, and MongoDB.

## 🚀 Features

- **Blog & News Posting**: Create and manage project management content
- **Comments System**: Interactive commenting on blog posts
- **Project Management Best Practices**: Curated content sections
- **Productivity Tools**: Daily planner, time tracker, and reporting dashboard
- **Admin Authentication**: JWT-based authentication for administrative features
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🏗️ Project Structure

```
project-management-blog/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Utility functions
│   │   └── config/          # Configuration files
│   ├── tests/               # Backend tests
│   ├── package.json
│   └── server.js
├── frontend/                # Vue.js 3 SPA
│   ├── src/
│   │   ├── components/      # Vue components
│   │   ├── views/           # Page views
│   │   ├── router/          # Vue Router configuration
│   │   ├── store/           # State management
│   │   └── utils/           # Frontend utilities
│   ├── tests/               # Frontend tests
│   ├── package.json
│   └── vite.config.js
├── shared/                  # Shared utilities and interfaces
├── docs/                    # Documentation
├── .github/                 # GitHub Actions workflows
├── docker-compose.yml       # Docker configuration
├── README.md
└── package.json             # Workspace management
```

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Jest + Supertest
- **Security**: Helmet, CORS, Rate Limiting
- **Documentation**: Swagger/OpenAPI

### Frontend
- **Framework**: Vue.js 3 (Composition API)
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest + Vue Test Utils
- **Charts**: Chart.js

### DevOps & Tools
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Monitoring**: Morgan (logging), Winston
- **Performance**: Compression middleware

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/reyisjones/ProManagerBlog.git
   cd project-management-blog
   ```

2. **Install dependencies**
   ```bash
   # Install workspace dependencies
   npm install
   
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

4. **Start the development servers**
   ```bash
   # Start backend (from root)
   npm run dev:backend
   
   # Start frontend (from root)
   npm run dev:frontend
   
   # Or start both concurrently
   npm run dev
   ```

## 📊 Content Categories

### Basics
- What is Project Management?
- Roles: PM vs Product Owner
- Project Lifecycle Phases

### Methodologies
- Agile Development
- Scrum Framework
- Kanban Methodology
- Waterfall Model

### Tools & Software
- Jira Administration
- Asana Workflows
- Trello Best Practices
- Microsoft Project

### Productivity & Tools
- Time Tracking Solutions
- Team Retrospectives
- Reporting Dashboards
- Performance Metrics

### Case Studies
- Success Stories
- Lessons from Failures
- Industry-Specific Examples

## 🔧 Productivity Tools

### Daily Planner
- Todo list with priority levels
- Status tracking (pending, in-progress, completed)
- Due date management

### Time Tracker
- Start/stop timers for tasks
- Project-based time logging
- Weekly/monthly summaries

### Reporting Dashboard
- Blog post analytics
- Comment engagement metrics
- Tag popularity charts
- User activity reports

## 🧪 Testing

```bash
# Run all tests
npm test

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend

# Run tests with coverage
npm run test:coverage
```

## 🔒 Security

- JWT-based authentication
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- Security headers with Helmet
- Environment variable protection

## 📈 Performance

- Database query optimization
- Response compression
- Static asset caching
- Code splitting (frontend)
- Lazy loading components
- Image optimization

## 🚀 Deployment

### Docker
```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Production Build
```bash
# Build frontend
npm run build:frontend

# Build backend
npm run build:backend
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email reyisnieves@example.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- Vue.js community for excellent documentation
- Express.js for the robust backend framework
- MongoDB for flexible data storage
- All contributors and maintainers
